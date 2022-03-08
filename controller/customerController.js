/*
* @author : U.K.Dulanjana Lakshan Kumarasingha
* @since : 0.1.0
*/
$("#Customer_a").click(function () {
    genCusId();
})
/*----------------- Save Customer --------------------------*/
$("#btnSaveCustomer").click(function () {
    let res = confirm("Do you want to save this Customer?");
    if (res) {
        addCustomer();
        clearAllCustomer();
        loadAllCustomer();
    }
    genCusId();
});

function addCustomer() {
    let CustomerId = $("#txtCusID").val();
    let CustomerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerTp = $("#txtCusTP").val();

    var customer = new customerDTO(CustomerId, CustomerName, customerAddress, customerTp);
    customerDB.push(customer);
}

/*----------------- Update Customer --------------------------*/
$("#btnUpdateCustomer").click(function () {
    let res = confirm("Do you want to update this Customer?");
    if (res) {
        let id = $("#txtCusID").val();
        updateCustomer(id);
    }
    loadAllCustomer();
    clearAllCustomer();
    genCusId();
})

function updateCustomer(id) {
    let updateCustomerId = $("#txtCusID").val();
    let updateCustomerName = $("#txtCusName").val();
    let updateCustomerAddress = $("#txtCusAddress").val();
    let updateCustomerNO = $("#txtCusTP").val();

    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getId() == id) {
            customerDB[i].setId(updateCustomerId);
            customerDB[i].setCustomerName(updateCustomerName);
            customerDB[i].setCustomerAddress(updateCustomerAddress);
            customerDB[i].setCustomerTP(updateCustomerNO);
            loadAllCustomer();
        }
    }
}

/*---------------------- Search Customer ----------------------*/
$("#btnCustomerSearch").click(function () {
    var customerID = $("#txtCusID").val();
    searchCustomer(customerID);
})

function searchCustomer(id) {
    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getId() == id) {
            $("#txtCusID").val(customerDB[i].getId());
            $("#txtCusName").val(customerDB[i].getCustomerName());
            $("#txtCusAddress").val(customerDB[i].getCustomerAddress());
            $("#txtCusTP").val(customerDB[i].getCustomerTP);
        }
    }
}


/*----------------- Other Method --------------------------*/

function clearAllCustomer() {
    $("#txtCusID,#txtCusName,#txtCusAddress,#txtCusTP").val("")
}

function genCusId() {
    if (customerDB.length == 0) {
        $("#txtCusID").val("C00-0001");
    } else if (customerDB.length > 0) {
        var code = customerDB[customerDB.length - 1].getCode().split("-")[1];
        var tempCode = parseInt(code);
        tempCode = tempCode + 1;
        if (tempCode <= 9) {
            $("#txtCusID").val("C00-000" + tempCode);
        } else if (tempCode <= 99) {
            $("#txtCusID").val("C00-00" + tempCode);
        } else if (tempCode <= 999) {
            $("#txtCusID").val("C00-0" + tempCode);
        } else if (tempCode <= 9999) {
            $("#txtCusID").val("C00-" + tempCode);
        }
    }
}

function loadAllCustomer() {
    $("#customerTable").empty();
    for (var i = 0; i < customerDB.length; i++) {
        let row = `<tr><td>${customerDB[i].getId()}</td><td>${customerDB[i].getCustomerName()}</td><td>${customerDB[i].getCustomerAddress()}</td><td>${customerDB[i].getCustomerTP()}</td></tr>`;
        $("#customerTable").append(row);
    }
}

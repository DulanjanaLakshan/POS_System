/*
* @author : U.K.Dulanjana Lakshan Kumarasingha
* @since : 0.1.0
*/
/*----------------------- customer CRUD ------------------------*/
$("#btnSaveAndUpdateCustomer").click(function () {
    SaveCustomer();
    clearCustomer();
    loadAllCustomer();
});

$("#btnSearch").click(function () {
    var searchId=$("#srcCusID").val();
    var response=searchCustomer(searchId);
    if (response){
        $("#txtCusID").val(response.id);
        $("#txtCusName").val(response.name);
        $("#txtCusAddress").val(response.address);
        $("#txtCusTP").val(response.number);
    }else {
        clearCustomer();
        alert("No Such a Customer...!");
    }
});

function SaveCustomer() {
    let customerId = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerNO = $("#txtCusTP").val();

    var customerObject = {
        id: customerId,
        name: customerName,
        address: customerAddress,
        number: customerNO
    }
    customerDB.push(customerObject);
}

function clearCustomer() {
    $("#txtCusID,#txtCusName,#txtCusAddress,#txtCusTP").val("");
    $("#txtCusID,#txtCusName,#txtCusAddress,#txtCusTP").css('border', '2px solid #ced4da');
    $("#txtCusID").focus();
    /*$("#btnSaveAndUpdateCustomer").attr('disabled', true);*/
}

function loadAllCustomer() {
    $("#customerTable").empty();
    for (var i of customerDB) {
        let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.number}</td></tr>`;
        $("#customerTable").append(row);
    }
}

function searchCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == id) {
            return customerDB[i];
        }
    }
}

/*----------------------- validate customer details ------------------------*/
const cusIDRegEx = /^(C00-)[0-9]{1,3}$/;
const cusNameRegEx = /^[A-z ]{5,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{7,}$/;
const cusSalaryRegEx = /^(070,071,072,073,074,075,076,077,078,079)[0-9](7)$/;

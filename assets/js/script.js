/*-----------------Manage Sections------------------------------*/
$("#Home_a").click(function () {
    $("#Home").css("display", "block");
    $("#Item_Section").css("display", "None");
    $("#Order").css("display", "None");
    $("#Customer_Section").css("display", "None");
})
$("#Pos").click(function () {
    $("#Home").css("display", "block");
    $("#Order").css("display", "None");
    $("#Item_Section").css("display", "None");
    $("#Customer_Section").css("display", "None");
})
$("#Item_a").click(function () {
    $("#Item_Section").css("display", "block");
    $("#Order").css("display", "None");
    $("#Home").css("display", "none");
    $("#Customer_Section").css("display", "none");
})
$("#Customer_a").click(function () {
    $("#Customer_Section").css("display", "block");
    $("#Order").css("display", "None");
    $("#Item_Section").css("display", "none");
    $("#Home").css("display", "none");
})
$("#PlaceOrder_a").click(function () {
    $("#Order").css("display", "block");
    $("#Customer_Section").css("display", "none");
    $("#Item_Section").css("display", "none");
    $("#Home").css("display", "none");
})

/*-----------------Item Manage Sections------------------------------*/
$("#btnItemSaveOrUpdate").click(function () {
    let ItemID = $("#txtItemID").val();
    let ItemName = $("#txtItemName").val();
    let ItemDescription = $("#txtItemDescription").val();
    let ItemQTY = $("#txtItemQTY").val();
    let ItemPrice = $("#txtItemPrice").val();
})

/*--------------------customer reguler expressions--------------------*/
const CIdReg =  /^(C00-)[0-9]{1,3}$/;
const CNameReg = /^[A-z]{5,20}$/;
const CAddressReg = /^[0-9/A-z. ,]{7,}$/
const CNumberReg = /^(070,071,072,073,074,075,076,077,078,079)[-]?[0-9]{7}$/;

$("#txtCusID,#txtCusName,#txtCusAddress,#txtCusTP").on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault(); // stop execution of the button
    }
});
$('#txtCusID,#txtCusName,#txtCusAddress,#txtCusSalary').on('blur', function () {
    formValid();
});

function formValid() {
    var cusId = $("#txtCusID").val();
    $("#txtCusID").css('border', '2px solid green');
    if (CIdReg.test(cusId)) {
        $("#txtCusID").css('border', '2px solid green');
    } else {
        $("#txtCusID").css('border', '2px solid red');
    }
}
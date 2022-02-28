/*
* @author : U.K.Dulanjana Lakshan Kumarasingha
* @since : 0.1.0
*/
let regItemCode = /^(I00-)[0-9]{4}$/;
let regItemName = /^[A-z 0-9.]{3,}$/;
let regItemUnitPrice = /^[0-9]{1,}([.][0-9]{2})?$/;
let regItemQty = /^[0-9]{1,}$/;

let searchItemCode;

$("#txtItemID,#txtItemName,#txtItemDescription,#txtItemQTY,#txtItemPrice").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
})
$("#txtItemID,#txtItemName,#txtItemDescription,#txtItemQTY,#txtItemPrice").on('blur', function () {
    itemValidation();
})

function itemValidation() {

}

$("#btnSaveItem").click(function () {
    addItem();
    loadAllItem();
})

function addItem() {
    let itemId = $("#txtItemID").val();
    let itemName = $("#txtItemName").val();
    let itemDescription = $("#txtItemDescription").val();
    let itemQTY = $("#txtItemQTY").val();
    let itemPrice = $("#txtItemPrice").val();

    var items = new ItemDTO(itemId, itemName, itemDescription, itemQTY, itemPrice);
    itemDB.push(items);
}

function loadAllItem() {
    $("#ItemTable").empty();
    for (var i = 0; i < itemDB.length; i++) {
        let row = `<tr><td>${itemDB[i].getCode()}</td><td>${itemDB[i].getName()}</td><td>${itemDB[i].getDescription()}</td><td>${itemDB[i].getQTY()}</td><td>${itemDB[i].getPrice()}</td></tr>`;
        $("#ItemTable").append(row);
    }
}

function deleteItem() {
    let searchItem = $("#txtItemID").val();
    for (var i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getCode() == searchItem) {
            itemDB.splice(i, 1);
            clearDeleteItemFields();
        }
    }
}

function clearDeleteItemFields() {
    $("#srcItemID").focus();
    $("#txtItemID").val("");
    $("#txtItemName").val("");
    $("#txtItemDescription").val("");
    $("#txtItemQTY").val("");
    $("#txtItemPrice").val("");
}

$("#btnItemDelete").click(function () {
    deleteItem();
    loadAllItem();
})
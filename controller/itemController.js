/*
* @author : U.K.Dulanjana Lakshan Kumarasingha
* @since : 0.1.0
*/
/*----------------- Save Item --------------------------*/
$("#btnSaveItem").click(function () {
    let res = confirm("Do you want to save this item?");
    if (res) {
        addItem();
        loadAllItem();
        ClearAll();
        genId();
    }
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

/*----------------- Item Delete --------------------------*/
$("#btnItemDelete").click(function () {
    let res = confirm("Do you want to delete this item?");
    if (res) {
        deleteItem();
    }
})

function deleteItem() {
    let searchItem = $("#txtItemID").val();
    for (var i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getCode() == searchItem) {
            itemDB.splice(i, 1);
            ClearAll();
            loadAllItem();
            genId();
        }
    }
}

/*----------------- Update Delete --------------------------*/
$("#btnUpdateItem").click(function () {
    let res = confirm("Do you want to update this item?");
    if (res) {
        let id = $("#srcItemID").val();
        updateItem(id);

    }
    loadAllItem();
    ClearAll();
    genId();
})

function updateItem(id) {
    let updateItemId = $("#txtItemID").val();
    let updateItemName = $("#txtItemName").val();
    let updateItemDescription = $("#txtItemDescription").val();
    let updateItemQTY = $("#txtItemQTY").val();
    let updateItemPrice = $("#txtItemPrice").val();

    for (var i = 0; i < itemDB.length; i++) {

        if (itemDB[i].getCode() == id) {
            itemDB[i].setCode(updateItemId);
            itemDB[i].setName(updateItemName);
            itemDB[i].setDescription(updateItemDescription);
            itemDB[i].setQTY(updateItemQTY);
            itemDB[i].setPrice(updateItemPrice);
            loadAllItem();
        }
    }
}

/*---------------------- Search Item ----------------------*/
$("#btnItemSearch").click(function () {
    var ItemId = $("#srcItemID").val();
    searchItem(ItemId);
})

function searchItem(id) {
    for (var i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getCode() == id) {
            $("#txtItemID").val(itemDB[i].getCode());
            $("#txtItemName").val(itemDB[i].getName());
            $("#txtItemDescription").val(itemDB[i].getDescription());
            $("#txtItemQTY").val(itemDB[i].getQTY());
            $("#txtItemPrice").val(itemDB[i].getPrice());
        }
    }
}

/*---------------------- Other Item Method ----------------------*/
function loadAllItem() {
    $("#ItemTable").empty();
    for (var i = 0; i < itemDB.length; i++) {
        let row = `<tr><td>${itemDB[i].getCode()}</td><td>${itemDB[i].getName()}</td><td>${itemDB[i].getDescription()}</td><td>${itemDB[i].getQTY()}</td><td>${itemDB[i].getPrice()}</td></tr>`;
        $("#ItemTable").append(row);
    }
}

function ClearAll() {
    $("#txtItemID,#txtItemName,#txtItemDescription,#txtItemQTY,#txtItemPrice, #srcItemID").val("");
    $("#txtItemID").focus();
}

function genId() {
    if (itemDB.length == 0) {
        $("#txtItemID").val("I00-0001");
    } else if (itemDB.length > 0) {
        var code = itemDB[itemDB.length - 1].getCode().split("-")[1];
        var tempCode = parseInt(code);
        tempCode = tempCode + 1;
        if (tempCode <= 9) {
            $("#txtItemID").val("I00-000" + tempCode);
        } else if (tempCode <= 99) {
            $("#txtItemID").val("I00-00" + tempCode);
        } else if (tempCode <= 999) {
            $("#txtItemID").val("I00-0" + tempCode);
        } else if (tempCode <= 9999) {
            $("#txtItemID").val("I00-" + tempCode);
        }
    }
}

$("#Item_a").click(function () {
    genId();
})
/*---------------------- Validate Item ----------------------*/
let regItemCode = /^(I00-)[0-9]{4}$/;
let regItemName = /^[A-z 0-9.]{3,}$/;
let regItemDes =/^[A-z 0-9.]{5,}$/;
let regItemQty = /^[0-9]{1,5}$/;
let regItemUnitPrice = /^[0-9]{1,}([.][0-9]{2})?$/;


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
    var itemId = $("#txtItemID").val();
    $("#txtItemID").css('border', '2px solid green');
    if (regItemCode.test(itemId)) {
        var itemName = $("#txtItemName").val();
        $("#txtItemID").css('border', '2px solid green');
        if (regItemName.test(itemName)) {
            var itemDescription = $("#txtItemDescription").val();
            $("#txtItemName").css('border', '2px solid green');
            if (regItemDes.test(itemDescription)){
                var itemQTY= $("#txtItemQTY").val();
                $("#txtItemDescription").css('border', '2px solid green');
                if (regItemQty.test(itemQTY)){
                    $("#txtItemQTY").css('border', '2px solid green');
                    var itemPrice=$("#txtItemPrice").val();
                    if (regItemUnitPrice.test(itemPrice)){
                        $("#txtItemPrice").css('border', '2px solid green');
                        return true;
                    }else{
                        $("#txtItemPrice").css('border', '2px solid red');
                        return false;
                    }
                }else{
                    $("#txtItemQTY").css('border', '2px solid red');
                    return false;
                }
            }else{
                $("#txtItemDescription").css('border', '2px solid red');
                return false;
            }
        } else {
            $("#txtItemName").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#txtItemID").css('border', '2px solid red');
        return false;
    }
}

/*
* @author : U.K.Dulanjana Lakshan Kumarasingha
* @since : 0.1.0
*/
function ItemDTO(code, name, description, qty, price) {
    var I_code = code;
    var I_name = name;
    var I_description = description;
    var I_qty = qty;
    var I_price = price;

    this.getCode = function () {
        return I_code;
    }
    this.getName = function () {
        return I_name;
    }
    this.getDescription = function () {
        return I_description;
    }
    this.getQTY = function () {
        return I_qty;
    }
    this.getPrice = function () {
        return I_price;
    }
    this.setCode = function () {
        I_code = code;
    }
    this.setName = function () {
        I_name = name;
    }
    this.setDescription = function () {
        I_description = description;
    }
    this.setQTY = function () {
        I_qty = qty;
    }
    this.setPrice = function () {
        I_price = price;
    }
}

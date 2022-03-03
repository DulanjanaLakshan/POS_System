function customerDTO(Id, Name, Address, Tp) {
    var customerId = Id;
    var customerName = Name;
    var customerAddress = Address;
    var customerTP = Tp;

    this.getId = function () {
        return customerId;
    }
    this.setId = function (id) {
        customerId = id;
    }
    this.getCustomerName = function () {
        return customerName;
    }
    this.setCustomerName = function (name) {
        customerName = name;
    }
    this.getCustomerAddress=function () {
        return customerAddress;
    }
    this.setCustomerAddress = function (address) {
        customerAddress = address;
    }
    this.getCustomerTP = function () {
        return customerTP;
    }
    this.setCustomerTP = function (tp) {
        customerTP = tp;
    }

}

function customerDTO(Id, Name, Address, Tp) {
    var customerId = Id;
    var customerName = Name;
    var customerAddress = Address;
    var customerTP = Tp;

    function getId() {
        return customerId;
    }

    function setId(id) {
        customerId = id;
    }

    function getName() {
        return customerName;
    }

    function setName(name) {
        customerName = name;
    }

    function getAddress() {
        return customerAddress;
    }

    function setAddress(address) {
        customerAddress = address;
    }

    function getTp() {
        return customerTP;
    }

    function setTp(Tp) {
        customerTP = Tp;
    }
}
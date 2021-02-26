// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Manager = require("./Employee");

class Manager {
    constructor(name, email, id, officeNumber){
        this.name = name;
        this.email = email;
        this.id = id;
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager
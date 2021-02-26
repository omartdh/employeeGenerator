// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Intern = require("./Employee");

class Intern {
    constructor(name, email, id, schoolName){
        this.name = name;
        this.email = email;
        this.id = id;
        this.schoolName = schoolName;
    }
    getRole(){
        return "Intern";
    }
    getSchoolName(){
        return this.schoolName;
    }
}

module.exports = Intern
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Engineer = require("./Employee");

class Engineer {
    constructor(name, email, id, github){
        this.name = name;
        this.email = email;
        this.id = id;
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer
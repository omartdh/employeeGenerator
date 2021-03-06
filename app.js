const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const teamMember = [];
function app(){
    function getManager(){
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the Manager Name?',
                name: 'managerName'
            },
            {
                type: 'input',
                message: 'What is the Manager ID?',
                name: 'managerID'
            },
            {
                type: 'input',
                message: 'What is the Manager Email?',
                name: 'managerEmail'
            },
            {
                type: 'input',
                message: 'What is the Manager Office Number?',
                name: 'managerOfficeNumber'
            }
        ]).then(function(response){
            const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOfficeNumber);
            teamMember.push(manager);
            addingNewMember();

        })
    }

    function getEngineer(){
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the Engineer Name?',
                name: 'engineerName'
            },
            {
                type: 'input',
                message: 'What is the Engineer ID?',
                name: 'engineerID'
            },
            {
                type: 'input',
                message: 'What is the Engineer Email?',
                name: 'engineerEmail'
            },
            {
                type: 'input',
                message: 'What is the Engineer GitHub username?',
                name: 'gitHubUser'
            }
        ]).then(function(response){
            const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.gitHubUser);
            teamMember.push(engineer);
            addingNewMember();

        })
    }

    function getIntern(){
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the Intern Name?',
                name: 'internName'
            },
            {
                type: 'input',
                message: 'What is the Intern ID?',
                name: 'internID'
            },
            {
                type: 'input',
                message: 'What is the Intern Email?',
                name: 'internEmail'
            },
            {
                type: 'input',
                message: 'What is the Intern School Name?',
                name: 'schoolName'
            }
        ]).then(function(response){
            const intern = new Intern(response.internName, response.internID, response.internEmail, response.schoolName);
            teamMember.push(intern);
            addingNewMember();

        })
    }

    function addingNewMember(){
        inquirer.prompt([
            {
                type: "input",
                message: "select employee: manager, engineer, intern, or done",
                // choices: [
                //     'manager',
                //     'engineer',
                //     'intern',
                //     'done'
                // ],
                name: 'employeeChoice'
            }
        ]).then(function(response){
            const role = response.employeeChoice;
            switch(role){
                case 'manager':
                    getManager();
                    break;
                case 'engineer':
                    getEngineer();
                    break;
                case 'intern':
                    getIntern();
                    break;
                case 'done':
                    rederTeam();
            }
        });
    }
    addingNewMember();
}

function rederTeam(){
    if(!fs.existsSync(OUTPUT_DIR)){ // check to see if this directory exist
        fs.mkdirSync(OUTPUT_DIR); // make directory
    }
    fs.writeFileSync(outputPath, render(teamMember), "utf-8");

}

app();



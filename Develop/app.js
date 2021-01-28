const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const initial_questions = require('./utils/initial_questions');
const new_member_questions = require('./utils/new_member_questions')
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let staffMembers = []

console.log('Lets get ready to build your staff...')

function init(){
    inquirer.prompt(initial_questions).then((data) => {
        
        if (data.employee_type === 'Manager') {
            let newManager = new Manager(data.name, data.id, data.email, data.office_number);
            staffMembers.push(newManager);
        } else if (data.employee_type === 'Engineer') {
            let newEngineer = new Engineer(data.name, data.id, data.email, data.github_username);
            staffMembers.push(newEngineer)
        } else if (data.employee_type === 'Intern') {
            let newIntern = new Intern(data.name, data.id, data.email, data.school);
            staffMembers.push(newIntern)
        }

    createNewMember()

    })
}

function createNewMember() {
    inquirer.prompt(new_member_questions).then((data) =>{
        let response = data.new_member.toLowerCase()
        if (response === "yes"){
            return init();
        } else if (response === 'no') {
            console.log(staffMembers)
        }
    })
}

init()



// TO do list:    

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



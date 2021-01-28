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
    inquirer.prompt(new_member_questions).then((data) =>
    {
        let response = data.new_member.toLowerCase()
        if (response === "yes"){
            return init();
        } else if (response === 'no') {
            generateTeam()
        }
    })
}

function generateTeam() {
    const html = render(staffMembers);
    fs.writeFile(outputPath, html, function (err) {
        if (err) {
            console.log("Looks like an error occurred");
        } else {
            console.log("Check out your team profile!");
        }
    }) 

}

init()




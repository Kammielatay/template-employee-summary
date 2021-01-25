const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'list',
            name: 'employee_type',
            message: 'What type of employee are you?',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            name: "office_number",
            type: "number",
            message: "What is your office number?",
            when: (answers) => answers.employee_type === 'Manager',
        },
        {
            name: "github_username",
            type: "input",
            message: "What is your GitHub username?",
            when: (answers) => answers.employee_type === 'Engineer',
        },
        {
            name: "school",
            type: "input",
            message: "What school do you attend?",
            when: (answers) => answers.employee_type === 'Intern',
        },

    ])
    .then((data) => {
        

        // fs.writeFile('team.html', (err) =>
        //     err ? console.log(err) : console.log('Success!')
        // );
    })

// TO do list:    

// create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



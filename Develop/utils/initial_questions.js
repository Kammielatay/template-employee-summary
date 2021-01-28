
const initial_questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your team members name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their id number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email?',
    },
    {
        type: 'list',
        name: 'employee_type',
        message: 'What type of employee are they?',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        name: "office_number",
        type: "number",
        message: "What is their office number?",
        when: (answers) => answers.employee_type === 'Manager',
    },
    {
        name: "github_username",
        type: "input",
        message: "What is their GitHub username?",
        when: (answers) => answers.employee_type === 'Engineer',
    },
    {
        name: "school",
        type: "input",
        message: "What school do they attend?",
        when: (answers) => answers.employee_type === 'Intern',
    },
   
]


module.exports = initial_questions
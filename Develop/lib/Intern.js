// Imported Employee class.
// Intern class defined and inherited from Employee class.
// Export Intern class.

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, testValue){
        super(name, id, email)
        this.school = testValue
    }

    getRole() {
        return "Intern"
    }

    getSchool() {
        return this.school;
    }


}

module.exports = Intern;
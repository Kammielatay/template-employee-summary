//Imported Employee class.
// Engineer class defined and inherits from Employee class.  
// Export Engineer class.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, testValue) {
        super(name, id, email);
        this.github = testValue;
    }

    getRole () {
        return "Engineer";
    }

    getGithub () {
        return this.github;
    }
}

module.exports = Engineer;
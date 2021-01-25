// Imported Employee class.
// Manager class defined and inherited from Employee class.
// Export Manager class.

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, testValue){
        super(name, id, email);
        this.officeNumber = testValue;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;
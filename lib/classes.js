class Employee { //superclass contains name, id, email
    constructor (name, id, email) {
        if (typeof name !== 'string' || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof id !== 'number' || id < 0 || isNaN(id)) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }

        if (typeof email !== 'string' || !email.trim().length || !email.split('').includes('@')) {
            throw new Error('Must enter a valid email');
        }
        
        this.name = name;
        this.id = id;
        this.email = email;
    };
//     get getName () {return this.name};
//     getId = () => {this.id};
//     getEmail = () => {this.email};
}

class Manager extends Employee { //manager has office
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
        this.position = 'Manager'
    }
    getOffice = () => {this.office}
    getPosition = () => {this.position}
}

class Engineer extends Employee { //engineer has github
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.position = 'Engineer'
    }
    getGithub = () => {this.github}
    getPosition = () => {this.position}
}

class Intern extends Employee { //intern has school
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.position = 'Intern';
    }
    getSchool = () => {this.github}
    getPosition = () => {this.position}
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern,
}
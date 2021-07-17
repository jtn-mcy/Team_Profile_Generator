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
        if (typeof office !== 'number' || office < 0 || isNaN(office)) {
            throw new Error("Expected parameter 'office' to be a non-negative number");
        }

        super(name, id, email);
        this.office = office;
        this.position = 'Manager'
    }
    getOffice = () => {this.office}
    getPosition = () => {
        return this.position
    }
}

class Engineer extends Employee { //engineer has github
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.position = 'Engineer'
    }
    getGithubUserName = () => {
        return this.github}
    getGithubURL = () => {
        return ('https://www.github.com/' + this.github)
    }
    getPosition = () => {
        return this.position}
}

class Intern extends Employee { //intern has school
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.position = 'Intern';
    }
    getSchool = () => {
        return this.school
    }
    getPosition = () => {
        return this.position
    }
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern,
}
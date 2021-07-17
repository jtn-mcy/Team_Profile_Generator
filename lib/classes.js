class Employee { //superclass contains name, id, email
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

}

class Manager extends Employee { //manager has office
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
        this.position = 'Manager'
    }
}

class Engineer extends Employee { //engineer has github
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.position = 'Engineer'
    }
}

class Intern extends Employee { //intern has school
    constructor(name, id, email, school) {
        super(name, id, email);
        this.office = school;
        this.position = 'Intern';
    }
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern,
}
const { Intern } = require('../lib/classes.js')

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email with associated class methods getName, getID, getEmail, getSchool, getPosition", () => {
        const intern = new Intern('Kenny', '01', "kenny@test.com", 'UCLA')

        expect(intern).toMatchObject({
            name: 'Kenny', 
            id: '01', 
            email: 'kenny@test.com', 
            school: 'UCLA', 
            getName: expect.any(Function), 
            getId: expect.any(Function), 
            getEmail: expect.any(Function), 
            getSchool: expect.any(Function), 
            getPosition: expect.any(Function)});
       });
    })
})
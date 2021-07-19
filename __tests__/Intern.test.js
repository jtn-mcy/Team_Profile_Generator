const { Intern } = require('../lib/classes.js')

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email with associated class methods getName, getID, getEmail, getSchool, getPosition", () => {
        const intern = new Intern('Kenny', 1, "kenny@test.com", 'UCLA')

        expect(intern).toMatchObject({
            name: 'Kenny', 
            id: 1, 
            email: 'kenny@test.com', 
            school: 'UCLA', 
            getSchool: expect.any(Function), 
            getPosition: expect.any(Function)});
       });
    });
    
    describe("Methods", () => {
        it('should obtain the school of the intern', () => {
            const intern = new Intern('Kenny', 1, "kenny@test.com", 'UCLA');
            school = intern.getSchool();
            expect(school).toEqual('UCLA');
        });
        it('should obtain the position of the employee', () => {
            const intern = new Intern('Kenny', 1, "kenny@test.com", 'UCLA');
            position = intern.getPosition();
            expect(position).toEqual('Intern');
        });
    });
});
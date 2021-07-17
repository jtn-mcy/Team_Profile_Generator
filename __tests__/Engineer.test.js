const { Engineer } = require('../lib/classes.js')

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email with associated class methods  getGithubUserName, getGithubURL, getPosition", () => {
        const engineer = new Engineer('Kenny', 1, "kenny@test.com", 'kenny');

        expect(engineer).toMatchObject({
            name: 'Kenny', 
            id: 1, 
            email: 'kenny@test.com', 
            // getName: expect.any(Function), 
            // getId: expect.any(Function), 
            // getEmail: expect.any(Function), 
            getGithubUserName: expect.any(Function),
            getGithubURL: expect.any(Function), 
            getPosition: expect.any(Function)});
       });
    })
    
    describe('Methods', () => {
        it('should obtain the Github username of the engineer', () => {
            const engineer = new Engineer('Kenny', 1, "kenny@test.com", 'kenny');
            userName = engineer.getGithubUserName();
            expect(userName).toEqual('kenny')
        });
        it('should obtain the Github URL of the engineer', () => {
            const engineer = new Engineer('Kenny', 1, "kenny@test.com", 'kenny');
            url = engineer.getGithubURL();
            expect(url).toEqual('https://www.github.com/kenny')
        });
        it('shoudld obtain the position of the employee', () => {
            const engineer = new Engineer('Kenny', 1, "kenny@test.com", 'kenny');
            position = engineer.getPosition();
            expect(position).toEqual('Engineer');
        })
    });
});
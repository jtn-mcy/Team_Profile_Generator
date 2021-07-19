const { Engineer } = require('../lib/classes.js')

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and github username with associated class methods getGithubUserName, getGithubURL, getRole", () => {
        const engineer = new Engineer('Kenny', 1, "kenny@test.com", 'kenny');

        expect(engineer).toMatchObject({
            name: 'Kenny', 
            id: 1, 
            email: 'kenny@test.com',
            github: 'kenny',
            getGithubUserName: expect.any(Function),
            getGithubURL: expect.any(Function), 
            getRole: expect.any(Function)});
       });
    })
    
    describe('Methods', () => {
        it('should obtain the Github username when getGithubUserName is called', () => {
            const engineer = new Engineer('Kenny', 1, "kenny@test.com", 'kenny');
            userName = engineer.getGithubUserName();
            expect(userName).toEqual('kenny')
        });
        it('should obtain the Github URL when getGithubURL is called', () => {
            const engineer = new Engineer('Kenny', 1, "kenny@test.com", 'kenny');
            url = engineer.getGithubURL();
            expect(url).toEqual('https://www.github.com/kenny')
        });
        it('shoudld obtain the role when getRole is called', () => {
            const engineer = new Engineer('Kenny', 1, "kenny@test.com", 'kenny');
            position = engineer.getRole();
            expect(position).toEqual('Engineer');
        })
    });
});
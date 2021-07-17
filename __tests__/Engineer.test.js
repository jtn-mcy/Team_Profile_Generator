const { Engineer } = require('../lib/classes.js')

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should creaet an object with a name, id, and email", () => {
        const engineer = new Engineer('Kenny', '01', "kenny@test.com", 'kenny')

        expect(engineer).toMatchObject({
            name: 'Kenny', 
            id: '01', 
            email: 'kenny@test.com', 
            getName: expect.any(Function), 
            getId: expect.any(Function), 
            getEmail: expect.any(Function), 
            getGithub: expect.any(Function), 
            getPosition: expect.any(Function)});
       });
    })
})
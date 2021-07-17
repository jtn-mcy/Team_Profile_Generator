const { Manager } = require('../lib/classes.js')

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email with associated class methods getName, getID, getEmail, getOffice, getPosition", () => {
        const manager = new Manager('Kenny', '01', "kenny@test.com", '101')

        expect(manager).toMatchObject({
            name: 'Kenny', 
            id: '01', 
            email: 'kenny@test.com', 
            office: '101', 
            getName: expect.any(Function), 
            getId: expect.any(Function), 
            getEmail: expect.any(Function), 
            getOffice: expect.any(Function), 
            getPosition: expect.any(Function)})
       });
    })
})
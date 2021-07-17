const { Employee } = require('../lib/classes.js')
// const classes = require('./lib/classes.js')

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email with associated class methods getName, getID, getEmail", () => {
        const employee = new Employee('Kenny', '01', "kenny@test.com")

        expect(employee).toMatchObject({name: 'Kenny', id: '01', email: 'kenny@test.com', getName: expect.any(Function), getId: expect.any(Function), getEmail: expect.any(Function)});
       });
    })
})
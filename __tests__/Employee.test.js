const { Employee } = require('../lib/classes.js')
// const classes = require('./lib/classes.js')

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email with associated class methods getName, getID, getEmail", () => {
        const employee = new Employee('Kenny', 1, "kenny@test.com")

        expect(employee).toMatchObject({
            name: 'Kenny', 
            id: 1, 
            email: 'kenny@test.com', 
            // getName: expect.any(Function), 
            // getId: expect.any(Function), 
            // getEmail: expect.any(Function)
            });
        });
        // * NO ARGUMENT ERROR
        it ("should throw an error if provided no arguments", () => {
            const cb = () => new Employee();
            expect(cb).toThrow();
        });
        // * NAME ERRORS
        it("should throw an error if invalid name", () => {
           const cb = () => new Employee('  ', 1, 'kenny@test.com');
           const err = new Error("Expected parameter 'name' to be a non-empty string");
            expect(cb).toThrowError(err);
        });
        // * NUMBER ERRORS
        it("should throw an error if negative number", () => {
            const cb = () => new Employee('Kenny', -1, 'kenny@test.com');
            const err = new Error("Expected parameter 'id' to be a non-negative number");
             expect(cb).toThrowError(err);
        });
        it("should throw an error if no number", () => {
            const cb = () => new Employee('Kenny', '', 'kenny@test.com');
            const err = new Error("Expected parameter 'id' to be a non-negative number");
             expect(cb).toThrowError(err);
        });
        it("should throw an error if invalid string as a number", () => {
            const cb = () => new Employee('Kenny', 'hello', 'kenny@test.com');
            const err = new Error("Expected parameter 'id' to be a non-negative number");
             expect(cb).toThrowError(err);
        });
        // * EMAIL ERRORS
        it("should throw an error if invalid email", () => {
            const cb = () => new Employee('Kenny', 1, 'kennytest.com');
            const err = new Error('Must enter a valid email');
             expect(cb).toThrowError(err);
        });
    });
});
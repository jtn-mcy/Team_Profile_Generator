const { Manager } = require('../lib/classes.js')

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email with associated class methods  getPosition", () => {
            const manager = new Manager('Kenny', 1, "kenny@test.com", 101);

            expect(manager).toMatchObject({
                name: 'Kenny', 
                id: 1, 
                email: 'kenny@test.com', 
                office: 101, 
                getOffice: expect.any(Function),
                getRole: expect.any(Function)})
       });
        it("should throw an error if negative number", () => {
            const cb = () => new Manager('Kenny', 1, "kenny@test.com", -101);
            const err = new Error("Expected parameter 'office' to be a non-negative number");
            expect(cb).toThrowError(err);
        });
        it("should throw an error if no number", () => {
            const cb = () => new Manager('Kenny', 1, "kenny@test.com", '');
            const err = new Error("Expected parameter 'office' to be a non-negative number");
            expect(cb).toThrowError(err);
        });
        it("should throw an error if invalid string as a number", () => {
            const cb = () => new Manager('Kenny', 1, "kenny@test.com", 'hello');
            const err = new Error("Expected parameter 'office' to be a non-negative number");
            expect(cb).toThrowError(err);
        });
    });
    
    describe('Methods', () => {
        it('should obtain the role when getRole is called', () => {
            const manager = new Manager('Kenny', 1, "kenny@test.com", 101);
            position = manager.getRole();
            expect(position).toEqual('Manager');
        })
        it('should obtain the office number when getOffice is called', () => {
            const manager = new Manager('Kenny', 1, "kenny@test.com", 101);
            office = manager.getOffice();
            expect(office).toEqual(101);
        })
    });
})
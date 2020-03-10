import QwixxModel from '../QwixxModel.js'

describe("QwixxModel", () => {
    describe(".rollDie", () => {
        it("Returns a value between 1 and 6", () => {

            // No, this is not a great test.  In general, a lot of thought needs 
            // to go into testing functions that use random numbers.
            // This should serve primarily as an example of  how to set up tests.          
            let result = QwixxModel.rollDie();
            expect(result).toBeGreaterThanOrEqual(1);
            expect(result).toBeLessThanOrEqual(6);
        })
    }); // end describe .rollDie

    describe("#rollDice", () => {

        let model;
        beforeEach(() => {

            // Mock rollDie so it will return a precise 
            // sequence of integers.
            QwixxModel.rollDie = jest.fn()
                .mockImplementationOnce(() => 8)
                .mockImplementationOnce(() => 6)
                .mockImplementationOnce(() => 7)
                .mockImplementationOnce(() => 5)
                .mockImplementationOnce(() => 3)
                .mockImplementationOnce(() => 0);

            model = new QwixxModel(4, 12);
        });

        it("sets all the dice", () => {
            // Verify that the values returned by rollDie end up 
            // in the wdice and dice arrays
            model.rollDice();
            expect(model.wdice).toEqual([8, 6]);
            expect(model.dice).toEqual([7, 5, 3, 0]);
        });
    });
});
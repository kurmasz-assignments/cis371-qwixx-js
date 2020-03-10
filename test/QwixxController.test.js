import QwixxController from '../QwixxController.js'

describe("QwixxController", () => {

    let model;
    let view;
    let controller;

    // Set up the test object and the mocks
    beforeEach(() => {
        model = {
            rollDice: jest.fn()
        };

        view = {
            onRollButtonClicked: jest.fn(),
            update: jest.fn()
        };

        controller = new QwixxController(model, view);
    });

    describe("#rollButtonClicked", () => {
        it("Tells the model to roll the dice", () => {
            controller.rollButtonClicked();
            expect(model.rollDice).toHaveBeenCalledTimes(1);
        });
        it("Tells the view to update", () => {
            controller.rollButtonClicked();
            expect(view.update).toHaveBeenCalledWith(model);
        });
    });
});
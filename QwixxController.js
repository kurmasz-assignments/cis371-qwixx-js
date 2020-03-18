export default class QwixxController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.onRollButtonClicked(() => this.rollButtonClicked());
        this.view.onNumberButtonClicked((r, c) => this.numberBoxClicked(r, c));
    }

    rollButtonClicked() {
        this.model.rollDice();
        this.view.update(this.model);
    }

    numberBoxClicked(row, column) {
        console.log("Specific numberBox clicked: " + row + ", " + column);
    }
}
export default class QwixxController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.onRollButtonClicked(() => this.rollButtonClicked());
    }

    rollButtonClicked() {
        this.model.rollDice();
        this.view.update(this.model);
    }
}
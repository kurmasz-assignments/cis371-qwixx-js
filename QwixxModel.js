export default class QwixxModel {

    constructor(numRows, maxColumn) {
        this.#numRows = numRows;
        this.#maxColumn = maxColumn;

        this.#wdice = [1, 2];
        this.#dice = [3, 4, 5, 6];
    }

    // return a random integer in the range [1, 6]
    static rollDie() {
        return Math.floor(Math.random() * 6 + 1);
    }

    rollDice() {
        this.#wdice = this.#wdice.map(() => QwixxModel.rollDie());
        this.#dice = this.#dice.map(() => QwixxModel.rollDie());
    }

    getWhiteDice() {
        // By cloning the private wdice array, we can help
        // ensure that the model doesn't accidentally modify 
        // the internal state.
        return Array.from(this.#wdice);        
    }

    getColoredDice() {
        return Array.from(this.#dice);
    }



}
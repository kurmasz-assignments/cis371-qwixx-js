export default class QwixxView {

    constructor() {}

    // Ideally, this view class should be the only class interacting with the DOM.
    // However, it is the controller that responds to the click.
    // One solution is for the controller to call a View method that adds
    // a callback of the Controller's choosing.
    onRollButtonClicked(callback) {
        document.getElementById('roll').addEventListener('click', callback);
    }

    onNumberButtonClicked(callback) {
        let numberBoxes = document.getElementsByClassName('numberBox');
        for (let i = 0; i < numberBoxes.length; ++i) {
            numberBoxes[i].addEventListener('click', (event) => {
                let regex = /box-(\d+)-(\d+)/

                // In the video, I used "event.target"; but, using numberBoxes[i]
                // is a better approach because it will work even if you have elements
                // nested inside your number boxes.
                let [, row, column] = numberBoxes[i].id.match(regex);;
                callback(row, column);
            });
        }
    }

    // Update the board according to the current state of the model.
    // IMPORTANT:  The View should not modify the model.  All accesses
    // to the model should be read only.
    update(model) {
            model.wdice.forEach((die, index) => {
                document.getElementById(`die-w${index}`).innerHTML = die;
            })

            model.dice.forEach((die, index) => {
                document.getElementById(`die-${index}`).innerHTML = die;
            });
        } // end update
} // end QwixxView
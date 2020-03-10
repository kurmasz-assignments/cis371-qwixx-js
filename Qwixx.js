import QwixxModel from './QwixxModel.js'
import QwixxView from './QwixxView.js'
import QwixxController from './QwixxController.js'

let model = new QwixxModel(4, 12);
let view = new QwixxView();
new QwixxController(model, view);
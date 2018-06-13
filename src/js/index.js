import "../main.scss";

import Model from "./model";
import View from "./view";
import Controller from "./controller";




// let view = new View();
// view.drawGrid();

let controller =  new Controller();
document.addEventListener("click", controller.handleClick)

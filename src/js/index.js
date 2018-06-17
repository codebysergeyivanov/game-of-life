import "../main.scss";

import Model from "./model";
import View from "./view";
import Controller from "./controller";

 let view = new View();
 let model = new Model(view);

let controller =  new Controller(model, view);

document.addEventListener("DOMContentLoaded", controller.handleLoad)
document.addEventListener("click", controller.handleClick)

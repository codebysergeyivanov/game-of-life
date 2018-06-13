import "../main.scss";

import Model from "./model";
import View from "./view";
import Controller from "./controller";




let model = new Model();
model.createInitialState();
model.createRandomState();
model.play();


let view = new View();
view.drawGrid();
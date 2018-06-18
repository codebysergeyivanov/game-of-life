import '../../node_modules/normalize.scss/normalize.scss';
import "../main.scss";

import Model from "./model";
import View from "./view";
import Controller from "./controller";

const view = new View();
const model = new Model(view);

const controller =  new Controller(model, view);

const app = {
    init() {
        this.event();
    },
    event() {
        const app = document.getElementById("app-gof");
        document.addEventListener("DOMContentLoaded", controller.handleLoad)
        app.addEventListener("click", controller.handleClick);
    }
}

app.init();
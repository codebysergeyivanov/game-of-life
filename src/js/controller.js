import Model from "./model";


let model = new Model();
model.createInitialState();



class Controller {
    handleClick(e) {
        if(e.target.closest('#c1')) {
            model.createCustomState(e);
        }

        if(e.target.closest(".play")) {
            model.play();
        }

        if(e.target.closest(".stop")) {
            model.stop();
        }

        if(e.target.closest(".clear")) {
            model.clear();
        }

        if(e.target.closest(".random")) {
            model.createRandomState();
        }
    }
}

export default Controller;
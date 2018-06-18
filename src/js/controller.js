class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        this.handleLoad = this.handleLoad.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleLoad() {
        this.view.drawGrid();
        this.model.toInitialState();
        this.model.toRandomState();
        this.model.play();
    }

    handleClick(e) {
        if(e.target.closest('#c1')) {
            this.model.toCustomState(e);
        }

        if(e.target.closest(".play")) {
            if(this.model.timer) return;
            this.model.play();
        }

        if(e.target.closest(".stop")) {
            this.model.stop();
        }

        if(e.target.closest(".clear")) {
            this.model.clear();
        }

        if(e.target.closest(".random")) {
            this.model.toRandomState();
        }

        if(e.target.closest(".patterns")) {
            this.view.showPatterns();
        }

        if(e.target.closest(".pulsar")) {
            this.model.toPulsarState();
        }

        if(e.target.closest(".baby-pulsar")){
            this.model.toBabyPulsarState();
        }

        if(e.target.closest(".pentadecathlon")) {
            this.model.toPentadecathlonState();
        }

        if(e.target.closest(".glider-gun")) {
            this.model.toGliderGunState();
        }
    }
}

export default Controller;
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        this.handleLoad = this.handleLoad.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleLoad() {
        this.view.drawGrid();
        this.model.createInitialState();
        this.model.createRandomState();
        this.model.play();
    }
    handleClick(e) {
        if(e.target.closest('#c1')) {
            this.model.createCustomState(e);
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
            this.model.createRandomState();
        }

        if(e.target.closest(".patterns")) {
            this.view.showPatterns();
        }

        if(e.target.closest(".pulsar")) {
            this.model.createPulsar();
        }

        if(e.target.closest(".baby-pulsar")){
            this.model.createBabyPulsar();
        }

        if(e.target.closest(".pentadecathlon")) {
            this.model.createPentadecathlon();
        }

        if(e.target.closest(".glider-gun")) {
            this.model.createGliderGun();
        }
    }
}

export default Controller;
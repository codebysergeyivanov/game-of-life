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
        this._go();
    }

    _go() {
        const state = this.model.play();
            this.view.clearField();
            this.view.showIteratorCount(this.model.iteratorCount);
            this.view.drawField(state);

             this.model.timer = setInterval(() => {
                const state = this.model.play();
                this.view.clearField();
                this.view.showIteratorCount(this.model.iteratorCount);
                this.view.drawField(state);
             }, 100)
    }

    handleClick(e) {
        if(e.target.closest('#c1')) {
            const state = this.model.toCustomState(e);
            this.view.drawField(state);
        }

        if(e.target.closest(".play")) {
            if(this.model.timer) return;
   
            this._go();
  
        }

        if(e.target.closest(".stop")) {
            this.model.stop();
        }

        if(e.target.closest(".clear")) {
            this.model.clear();
            this.view.showIteratorCount(0);
            this.view.clearField();
        }

        if(e.target.closest(".random")) {
            const state = this.model.toRandomState();
            this.view.drawField(state);
        }

        if(e.target.closest(".patterns")) {
            this.view.showPatterns();
        }

        if(e.target.closest(".pulsar")) {
            const state = this.model.toPulsarState();
            this.view.showIteratorCount(0);
            this.view.drawField(state);
        }

        if(e.target.closest(".baby-pulsar")){
            const state = this.model.toBabyPulsarState();
            this.view.showIteratorCount(0);
            this.view.drawField(state);
        }

        if(e.target.closest(".pentadecathlon")) {
            const state = this.model.toPentadecathlonState();
            this.view.showIteratorCount(0);
            this.view.drawField(state);
        }

        if(e.target.closest(".glider-gun")) {
            const state = this.model.toGliderGunState();
            this.view.showIteratorCount(0);
            this.view.drawField(state);
        }
    }
}

export default Controller;
export default class Model {
    constructor() {
        this.state = [];
        this.animadedState = [];
    }
    createInitialState() {
        for(let i = 0; i < 20; i++){
            this.state[i] = [];
            for(let j = 0; j < 44; j++) {
                this.state[i][j] = false;
            }
        }
    }

    createRandomState() {
        for(let i = 0; i < 20; i++){
            for(let j = 0; j < 44; j++) {
                if(Math.random() < 0.5) {
                    this.state[i][j] = true;
                }                
            }
        }
    }

    clear() {
        clearField(); //View
        this.createInitialState();
    }

    play() {
        
    }
}

let model = new Model();
model.createInitialState();
model.createRandomState();
console.log(model.state);
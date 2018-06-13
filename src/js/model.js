export default class Model {
    constructor() {
        this.state = [];
        this.timer = null;
        this.play = this.play.bind(this);
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

    createCustomState(e) {
        let x = e.offsetX;
        let y = e.offsetY;
        x = Math.floor(x / 20);
        y = Math.floor(y / 20);
        this.state[y][x] = true;
        //drawField();
    }

    clear() {
        clearTimeout(this.timer);
        this.timer = null;
        //clearField(); //View
        this.createInitialState();
    }

    stop() {
        clearTimeout(this.timer);
        this.timer = null;
    }

    play() {
        // claerFied();
        let animadedState = []
        for (let i = 0; i < 20; i++){
            animadedState[i] = [];
            for (let j = 0; j < 44; j++) {
                let siblings = 0;
                if (this.state[i][this._checkLeftCell(j)]) siblings++; // ⇐
                if (this.state[i][this._checkRightCell(j)]) siblings++; // ⇒

                if (this.state[this._checkTopRow(i)][j]) siblings++; // ⇑
                if (this.state[this._checkDownRow(i)][j])  siblings++; // ⇓

                if (this.state[this._checkTopRow(i)][this._checkLeftCell(j)]) siblings++; //⇖
                if (this.state[this._checkTopRow(i)][this._checkRightCell(j)]) siblings++; //⇗

                if (this.state[this._checkDownRow(i)][this._checkLeftCell(j)]) siblings++; // ⇙
                if (this.state[this._checkDownRow(i)][this._checkRightCell(j)]) siblings++; // ⇘

                if (!this.state[i][j]){
                    if (siblings == 3) {
                        animadedState[i][j] = true;
                    } else {
                        animadedState[i][j] = false;
                    }
                }

                if (this.state[i][j]) {
                    if (siblings == 2 || siblings == 3) {
                        animadedState[i][j] = true;
                    } else {
                        animadedState[i][j] = false;
                    }
                }
            }
        }
        this.state = animadedState;
        // draw
        // this.timer = setTimeout(this.play, 100)
    }
    _checkDownRow(val) {
        if(val == 19) return 0;
        else return val + 1;
    }
    _checkTopRow(val) {
        if(val == 0) return 19;
        else return val - 1;
    }
    _checkLeftCell(val) {
        if(val == 0) return 43;
        else return val - 1;
    }
    _checkRightCell(val) {
        if(val == 43) return 0;
        else return val + 1;
    }
}



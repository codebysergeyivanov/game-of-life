export default class View {
  constructor() {
    this.patterns = null;
    this.c1 = document.getElementById("c1");
    this.ctx = this.c1.getContext('2d');
    this.iteratorCount = document.querySelector(".iterator-count");
    this.appGOF = document.querySelector("#app-gof");
    this.canvasGroup = document.querySelector(".canvas-group");
  }
 
  drawGrid() {   
    const layerC = document.createElement('canvas');
    this.canvasGroup.appendChild(layerC);
    
    layerC.className = 'layer-c';
    layerC.width = 880;
    layerC.height = 400;
    
    const layerCtx = layerC.getContext('2d');
    
    for (let i = 0; i <= layerC.height; i += 20) {
      layerCtx.moveTo(0, i);
      layerCtx.strokeStyle = "green";
      layerCtx.lineTo(layerC.width, i);
      layerCtx.stroke();
    }
    
    for (let i = 0; i <= layerC.width; i += 20) {
      layerCtx.moveTo(i, 0);
      layerCtx.strokeStyle = "green";
      layerCtx.lineTo(i, layerC.height);
      layerCtx.stroke();
    }
 }

  drawField(state) {
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 44; j++) {
        if (state[i][j]) {
          this.ctx.fillStyle = '#388E3C';
          this.ctx.fillRect(j * 20+1 , i * 20+1, 18, 18);
        } else {
          this.ctx.clearRect(j * 20+1 , i * 20+1, 18, 18);
        }
      }
    }
  }

  clearField() {
    this.ctx.clearRect(0, 0, this.c1.width, this.c1.height);
  }

  showPatterns() {
    const self = this;
    
    if(!this.patterns) {
      this.patterns = document.createElement('div');
      this.patterns.className = "list-patterns";
      this.appGOF.appendChild(this.patterns);
      
      this.createPulsar();
      this.createBabyPulsar();
      this.createPentadecathlon();
      this.createGliderGun();

      setTimeout(function() {
        self.patterns.classList.add("open");
      }, 4);   
      return;
    }
    
    this.patterns.classList.toggle("open");     
  }

  createPulsar() {
    const pulsar = document.createElement("button");
    pulsar.className = "pulsar";
    pulsar.innerHTML = "Pulsar";
    this.patterns.appendChild(pulsar);
  }
  
  createBabyPulsar() {
    const babyPulsar = document.createElement("button");
    babyPulsar.className = "baby-pulsar";
    babyPulsar.innerHTML = "Baby Pulsar";
    this.patterns.appendChild(babyPulsar);
  }

  createPentadecathlon() {
    const pentadecathlon = document.createElement("button");
    pentadecathlon.className = "pentadecathlon";
    pentadecathlon.innerHTML = "Pentadecathlon";
    this.patterns.appendChild(pentadecathlon);
  }

  createGliderGun() {
    const gliderGun = document.createElement("button");
    gliderGun.className = "glider-gun";
    gliderGun.innerHTML = "Glider Gun";
    this.patterns.appendChild(gliderGun);
  }

  showIteratorCount(count) {
    this.iteratorCount.innerHTML = count;
  }
}
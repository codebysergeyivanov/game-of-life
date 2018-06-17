export default class View {
  constructor() {
    this.patterns = null;
  }
 drawGrid() {
     let c1 = document.getElementById("c1");
     let layerC = document.createElement('canvas');
     document.querySelector(".canvas-group").appendChild(layerC, c1);
    layerC.className = 'layer-c';
    let layerCtx = layerC.getContext('2d');
    layerC.width = 880;
    layerC.height = 400;

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
    let c1 = document.getElementById("c1");
    let ctx = c1.getContext('2d');
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 44; j++) {
        if (state[i][j]) {
          ctx.fillStyle = '#388E3C';
          ctx.fillRect(j * 20+1 , i * 20+1, 18, 18);
        } else {
          ctx.clearRect(j * 20+1 , i * 20+1, 18, 18);
        }
      }
    }
  }

  clearField() {
    let c1 = document.getElementById("c1");
    let ctx = c1.getContext('2d');
    ctx.clearRect(0, 0, c1.width, c1.height);
  }

  showPatterns() {
    let self = this;
    if(!this.patterns) {
      this.patterns = document.createElement('div');
      this.patterns.className = "list-patterns";
      document.querySelector(".app-gof").appendChild(this.patterns);
      
      let pulsar = document.createElement("button");
      pulsar.className = "pulsar";
      pulsar.innerHTML = "Pulsar";
      this.patterns.appendChild(pulsar);

      let babyPulsar = document.createElement("button");
      babyPulsar.className = "baby-pulsar";
      babyPulsar.innerHTML = "Baby Pulsar";
      this.patterns.appendChild(babyPulsar);

      let pentadecathlon = document.createElement("button");
      pentadecathlon.className = "pentadecathlon";
      pentadecathlon.innerHTML = "Pentadecathlon";
      this.patterns.appendChild(pentadecathlon);

      let gliderGun = document.createElement("button");
      gliderGun.className = "glider-gun";
      gliderGun.innerHTML = "Glider Gun";
      this.patterns.appendChild(gliderGun);

      setTimeout(function() {
        self.patterns.classList.add("open");
      }, 0);   
      return;
    }
    this.patterns.classList.toggle("open");     
  }

  showIteratorCount(count) {
    document.querySelector(".iterator-count").innerHTML = count;
  }
  

}
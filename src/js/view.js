export default class View {
 drawGrid() {
     let c1 = document.getElementById("c1");
     let layerC = document.createElement('canvas');
     document.body.appendChild(layerC);
    layerC.className = 'layer-c';
    let layerCtx = layerC.getContext('2d');
    layerC.width = 880;
    layerC.height = 400;
    layerC.style.position = 'fixed';
    layerC.style.left = c1.getBoundingClientRect().left + 'px';
    layerC.style.top = c1.getBoundingClientRect().top + "px";
    layerC.style.zIndex = '-1';

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

}
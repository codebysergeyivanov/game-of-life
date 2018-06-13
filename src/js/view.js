export default class View {
 drawGrid() {
     let c1 = document.getElementById("c1");
     let ctx = c1.getContext('2d');

     for (let i = 0; i <= c1.height; i += 20) {
        ctx.moveTo(0, i);
        ctx.strokeStyle = "green";
        ctx.lineTo(c1.width, i);
        ctx.stroke();
      }
    
      for (let i = 0; i <= c1.width; i += 20) {
        ctx.moveTo(i, 0);
        ctx.strokeStyle = "green";
        ctx.lineTo(i, c1.height);
        ctx.stroke();
      }
 }

}
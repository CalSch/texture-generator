/** @type {HTMLCanvasElement} */
let canvas = document.getElementById("screen");
let ctx = canvas.getContext('2d');

let texWidth = 256;
let texHeight = 256;

function updateSize() {
    canvas.width = texWidth;
    canvas.height = texHeight;
}

function clear() {
    ctx.clearRect(0,0,texWidth,texHeight);
}

function render() {
    updateSize();
    clear();
    ctx.fillStyle="red";
    ctx.fillRect(0,0,10,10);
    let data = ctx.createImageData(texWidth,texHeight);
    for (let i=0;i<texWidth*texHeight*4;i+=4) {
        data.data[i+0]=Math.random()*255;
        data.data[i+1]=Math.random()*255;
        data.data[i+2]=Math.random()*255;
        data.data[i+3]=255;
    }
    ctx.putImageData(data,0,0);
    ctx.fillStyle="red";
    ctx.fillRect(0,0,10,10);
}

addButton("Render",(ev)=>{
    render();
})
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

function init(){
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0, canvas.width, canvas.height)
}

init();
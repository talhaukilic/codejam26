const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const GAME = {
    width: canvas.width,
    height: canvas.height,
    background: "#0b1020"
};

function render() {
    ctx.fillStyle = GAME.background;
    ctx.fillRect(0,0, GAME.width, GAME.height);
}
function init(){
    render();
    console.log("Game initialized.")
}

init();
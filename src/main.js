const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//alert(1);
const game = new Game([10,20,4],0,0);
//alert(2);
game.initGame()
//alert(3);
game.board.createTet(tetShapes[0], [5,24], 1, true);
//game.board.drawBoard(ctx,[88,40,80,160]);
//alert(4);
const intervalId = setInterval(gameStep, 16.67);
gameStep();

function gameStep()
{
    game.step();
    game.board.drawBoard(ctx,[88,40,80,160]);
}
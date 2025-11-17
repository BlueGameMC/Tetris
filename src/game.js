class Game // this is a class so 2p works maybe
{
    // [w,h,extraH], levelInt, array for game controls (TBD)
    constructor(boardDim, level, controls)
    {
        this.width = boardDim[0];
        this.height = boardDim[1];
        this.hiddenHeight = boardDim[2];

        this.level = level;
        this.controls = controls;

        this.dropTick = 0;
    }

    initGame()
    {
        this.board = new Board([this.width,this.height],this.hiddenHeight);  
    }

    // [x,y] offset array
    movePiece(offSet)
    {
        this.board.moveActive(offSet);
    }

    step()
    {
        this.dropTick=this.dropTick+1;
        if(this.dropTick >= dropSpeeds[this.level])
        {
            //alert(this.dropTick);
            this.dropTick = 0;
            this.movePiece([0,-1]);
        }
    }

}
// Main Game Logic
// display.js will draw the game and ui
// (hopefully so 2p works really easily)

// init()
// create a board

// step() - should run 60 fps
// drop the piece if its the right frame w/ nes speeds
// decide next piece for the next window
// move/rotate the piece
// check for lines and award points
// create new tet if needed
class Board //The grid the pieces are on. (0,0) will be the BOTTOM LEFT
{
  // [x,y] of the width and height, how many extra rows are placed outside of view where the pieces actually spawn
  constructor(size, hiddenHeight)
  {
    this.width = size[0];
    this.height = size[1];
    this.hiddenHeight = hiddenHeight;

    //alert("board created");

    // i wanted these to be 2d arrays but thats really hard and REALLY redundant so instead this is a 1d list of every single block/active tetronimo anywhere on the grid
    // and the objects hold their own position. (this is stupid)
    // blocks array will hopefully hold references to every block
    this.blocks = [];
    // tetronimos hold reference to the same blocks referenced in the block array. this is intended and hopefully will cause no problems
    this.tetronimos = [];

    this.activeTet = null; //Whichever tet will be moved when the player presses the buttons. PROBABLY only one active tet at any time 
    // (i cant think of a reason for there to be more than one)

  }

  // [[x,y]] array of block OFFETS, [x,y] position array, color index, BOOLEAN if set as controlled piece (probably always true)
  createTet(blocks, position, color, active)
  {
    // create the new tet and assign it as active
    this.tetronimos.push(new Tetronimo(blocks,position,this,color));
    if(active)
    {
      this.activeTet = this.tetronimos[this.tetronimos.length-1];
      //(this.activeTet);
    }
  }

  moveActive(offSet)
  {
    this.activeTet.move(offSet);
    //alert(this.activeTet.y)
  }

  // Is there a block/tetronimo currently at the given [x,y] position?
  // [x,y] pos, check for blocks or for tetronimos? false == blocks, true == tetronimo
  checkForPosition(position, checkSwitch)
  {
    let checkArray; // use same code for both which will probably work
    if(checkSwitch === false) // check blocks array
    {
      checkArray = this.blocks;
    }
    else // check tets array
    {
      checkArray = this.tetronimos;
    }

    for(let i = 0; i < checkArray.length; i++)
    {
      // blocks and tets use the same position syntax so checking works for both
      if(checkArray[i].x === position[0] && checkArray[i].y === position[1])
      {
        // hopefully returns a reference to the original object through the array copy of an array referencing objects
        return checkArray[i];
      }
    }

    return null;

  }

  // draw the board on the ctx using [x,y,width,height]
  // 0,0 is BOTTOM LEFT
  drawBoard(ctx, transform)
  {
    var drawX = transform[0];
    var drawY = transform[1];
    var drawWidth = transform[2];
    var blockWidth = drawWidth / this.width;
    var blockHeight = blockWidth;

    var drawHeight = blockHeight * this.height;
    if(transform.length >= 4)
    {
      drawHeight = transform[3];
      blockHeight = drawHeight / this.height;
    }

    // background
    ctx.fillStyle = "black";
    ctx.fillRect(drawX,drawY,drawWidth,drawHeight);

    // blocks - includes active tets
    for(let i = 0; i < this.blocks.length; i++)
    {
      let block = this.blocks[i];
      ctx.fillStyle = "red";
      if(block.y <= this.height)
      {
          ctx.fillRect(drawX + block.x*blockWidth,drawY + drawHeight-(block.y*blockHeight),blockWidth,blockHeight);
      }
      //console.log(block);
    }
  }

}

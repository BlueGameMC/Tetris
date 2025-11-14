class Board //The grid the pieces are on. (0,0) will be the BOTTOM LEFT
{
  // [x,y] of the width and height, how many extra rows are placed outside of view where the pieces actually spawn
  constructor(size, hiddenHeight)
  {
    this.width = size[0];
    this.height = size[1];
    this.hiddenHeight = hiddenHeight;

    // i wanted these to be 2d arrays but thats really hard and REALLY redundant so instead this is a 1d list of every single block/active tetronimo anywhere on the grid
    // and the objects hold their own position. (this is stupid)
    // blocks array will hopefully hold references to every block
    this.blocks = [];
    // tetronimos hold reference to the same blocks referenced in the block array. this is intended and hopefully will cause no problems
    this.tetronimos = [];
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

}

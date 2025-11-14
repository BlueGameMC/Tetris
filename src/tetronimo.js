class Tetronimo //Every tetris piece that is ACTIVELY falling (so like. just one. of them)
{
  // blocks is an array of every child block, position is an [x,y] array, REFERENCE to the grid object it is inside (hopefully making 2p work)
  constructor(blocks, position, grid)
  {
    this.blocks = blocks;

    // tet position probably matters for when i add rotation, so the offset point follows correctly
    this.x = position[0];
    this.y = position[1];

    this.grid = grid;

    this.activeTet = null; //Whichever tet will be moved when the player presses the buttons. PROBABLY only one active tet at any time 
    // (i cant think of a reason for there to be more than one)
  }

  // move the tet and EVERY block in it. offSet is a [x,y] array of where to move to
  move(offSet)
  {
    // Check if the move can be done, and do it if it is. return whether or not the move was made succesfully
    for(let i = 0; i <= blocks.length; i++)
    {
      if(blocks[i].checkMove(offSet) === false)
      {
        return false;
      }
    }
    for(let i = 0; i <= blocks.length; i++)
    {
      blocks[i].move(offSet)
    }

    this.x += offSet[0];
    this.y += offSet[1];
    return true;
  }
}

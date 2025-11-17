class Tetronimo //Every tetris piece that is ACTIVELY falling (so like. just one. of them)
{
  // blocks is an array of a list of offsets for the child blocks, position is an [x,y] array, REFERENCE to the grid object it is inside (hopefully making 2p work)
  constructor(blocks, position, grid, color)
  {
    // tet position probably matters for when i add rotation, so the offset point follows correctly
    this.x = position[0];
    this.y = position[1];

    this.grid = grid;

    this.blocks = [];
    for(let i = 0; i < blocks.length; i++)
    {
      // create the new blocks and add them to the grid's list
      this.blocks.push(new Block([this.x + blocks[i][0], this.y + blocks[i][1]], this, color));
      grid.blocks.push(this.blocks[this.blocks.length-1]);
    }

  }

  // move the tet and EVERY block in it. offSet is a [x,y] array of where to move to
  move(offSet)
  {
    
    // Check if the move can be done, and do it if it is. return whether or not the move was made succesfully
  
    for(let i = 0; i < this.blocks.length; i++)
    {
      if(this.blocks[i].checkMove(offSet) === false)
      {
        return false;
      }
    }
    for(let i = 0; i < this.blocks.length; i++)
    {
      this.blocks[i].move(offSet);
    }

    this.x += offSet[0];
    this.y += offSet[1];
    return true;
  }
}

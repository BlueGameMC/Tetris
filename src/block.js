class Block // Each induvidual tile is a block, whether part of a tetronimo or placed down
{ 
  // Indexed color, array of [x,y] and reference to the tetronimo IF it is part of one
  constructor(color, position, owner)
  {
    this.color = color;
    this.x = position[0];
    this.y = position[1];
    if(owner === null)
    {
      this.owner = null;
      this.owned = false;
    }
    else
    {
      this.owner = owner;
      this.owned = true;
    }
  }

  // Check if the offset coordinate [x,y] on the grid is empty or not
  checkMove(offSet)
  {
    let checkX = this.x + offSet[0];
    let checkY = this.y + offSet[1];
    // checkForPosition returns null if empty, and the object in the position if not. false makes it check for blocks
    return owner.grid.checkForPosition([checkX, checkY], false) === null;
  }

  // Move the piece to this [x,y] position WITHOUT checking if it's valid or not.
  // two blocks can have the same position without overriding each other which is probably bad
  move(offSet)
  {
    this.x = this.x + offSet[0];
    this.y = this.y + offSet[1];
  }

}

class Block // Each induvidual tile is a block, whether part of a tetronimo or placed down
{ 
  // Indexed color, array of [x,y] and reference to the tetronimo IF it is part of one
  constructor(position, owner, color)
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
    if(checkX > this.owner.grid.width || checkX < 0)
    {
      return false
    }
    if(checkY <= 0)
    {
      return false;
    }
    // checkForPosition returns null if empty, and the object in the position if not. false makes it check for blocks
    return true;
    //return this.owner.grid.checkForPosition([checkX, checkY], false) === null;
  }

  // Move the piece to this [x,y] position WITHOUT checking if it's valid or not.
  // two blocks can have the same position without overriding each other which is probably bad
  move(offSet)
  {
    this.x += offSet[0];
    this.y += offSet[1];
    //alert("a");
  }

}

class Coord {

  constructor(coordinate) {
    this.x = coordinate[0];
    this.y = coordinate[1];
  }

  plus(coordinate) {
    const newX = this.x + coordinate.x;
    const newY = this.y + coordinate.y;
    return new Coord([newX, newY]);
  }

  equals(coordinate) {
    return (this.x === coordinate.x && this.y === coordinate.y);
  }

}

export default Coord;

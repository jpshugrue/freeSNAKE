class Coord {

  constructor(coordinate) {
    this.x = coordinate[0];
    this.y = coordinate[1];
  }

  plus(coordinate) {
    const newX = this.x + coordinate[0];
    const newY = this.y + coordinate[1];
    return new Coord([newX, newY]);
  }

  equals(coordinate) {
    return (this.x === coordinate[0] && this.y === coordinate[1]);
  }

}

export default Coord;

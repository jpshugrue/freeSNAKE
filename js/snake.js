import Coord from './coord';

class Snake {

  constructor(startingCoord) {
    this.direction = "N";
    this.headCoord = startingCoord;
    this.segments = [startingCoord];
  }

  move() {
    this.headCoord = new Coord([this.headCoord.x, this.headCoord.y]);
    switch (this.headCoord) {
      case "N":
        this.headCoord.y -= 1;
      case "E":
        this.headCoord.x += 1;
      case "S":
        this.headCoord.y += 1;
      case "W":
        this.headCoord.x -= 1;
    }
    this.segments.push(this.headCoord);
  }

  turn(newDirec) {
    this.direction = newDirec;
  }

  gameOver() {
    if (this.segments.length === 1) {
      return false;
    } else {
      this.segments.forEach((segment) => {
        if (this.headCoord.equals(segment)) {
          return true;
        }
      });
    }
    return false;
  }

}

export default Snake;

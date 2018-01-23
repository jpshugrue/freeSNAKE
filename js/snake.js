import Coord from './coord';

class Snake {

  constructor(startingCoord) {
    this.direction = "N";
    this.headCoord = startingCoord;
    this.segments = [startingCoord];
  }

  move() {
    this.headCoord = new Coord([this.headCoord.x, this.headCoord.y]);
    switch (this.direction) {
      case "N":
        this.headCoord.y -= 1;
        break;
      case "E":
        this.headCoord.x += 1;
        break;
      case "S":
        this.headCoord.y += 1;
        break;
      case "W":
        this.headCoord.x -= 1;
        break;
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
      for (let i = 0; i < this.segments.length-1; i++) {
        if (this.headCoord.equals(this.segments[i])) {
          return true;
        }
      }
    }
    return false;
  }

}

export default Snake;

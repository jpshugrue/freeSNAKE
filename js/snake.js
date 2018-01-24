import Coord from './coord';

class Snake {

  constructor(startingCoord, apple) {
    this.apple = apple;
    this.direction = "N";
    this.headCoord = startingCoord;
    this.segments = [startingCoord];

    this.moveDifferentials = {
      "N": new Coord([0, -1]),
      "E": new Coord([1, 0]),
      "S": new Coord([0, 1]),
      "W": new Coord([-1, 0])
    };
  }

  move() {
    this.segments.push(this.headCoord.plus(this.moveDifferentials[this.direction]));
    this.headCoord = this.segments[this.segments.length-1];
    if (!this.headCoord.equals(this.apple.position)) {
      this.segments.shift();
    } else {
      this.apple.move();
    }
  }

  contains(coord) {
    for(let i = 0; i < this.segments.length; i++) {
      if (this.segments[i].equals(coord)) {
        return true;
      }
    }
    return false;
  }

  turn(newDirec) {
    this.direction = newDirec;
  }

  gameOver() {
    if (this.headCoord.x < 0 || this.headCoord.x >= 20 ||
      this.headCoord.y < 0 || this.headCoord.y >= 20) {
        return true;
    } else if (this.segments.length === 1) {
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

import Coord from './coord';

class Snake {

  constructor(startingCoord) {
    this.direction = "N";
    this.headCoord = startingCoord;
    this.segments = [startingCoord];
    this.fed = false;

    this.moveDifferentials = {
      "N": new Coord([0, -1]),
      "E": new Coord([1, 0]),
      "S": new Coord([0, 1]),
      "W": new Coord([-1, 0])
    };
  }

  move() {
    // debugger
    this.segments.push(this.headCoord.plus(this.moveDifferentials[this.direction]));
    this.headCoord = this.segments[this.segments.length-1];
    if (!this.fed) {
      this.segments.shift();
    } else {
      this.fed = false;
    }


    // this.headCoord = new Coord([this.headCoord.x, this.headCoord.y]);
    // switch (this.direction) {
    //   case "N":
    //     this.headCoord.y -= 1;
    //     break;
    //   case "E":
    //     this.headCoord.x += 1;
    //     break;
    //   case "S":
    //     this.headCoord.y += 1;
    //     break;
    //   case "W":
    //     this.headCoord.x -= 1;
    //     break;
    // }
  }

  grow() {
    // this.headCoord = new Coord([this.headCoord.x, this.headCoord.y]);
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

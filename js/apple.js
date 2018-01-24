import Coord from './coord';

class Apple {

  constructor(board) {
    this.board = board;
    this.position = new Coord([5, 5]);
    this.getAvailablePos = this.getAvailablePos.bind(this);
  }

  move() {
    this.position = this.getAvailablePos();
  }

  getAvailablePos() {
    let x = Math.floor(Math.random() * this.board.dims);
    let y = Math.floor(Math.random() * this.board.dims);
    let coord = new Coord([x, y]);
    while (this.board.snake.contains(coord)) {
      coord.x = Math.floor(Math.random() * this.board.dims);
      coord.y = Math.floor(Math.random() * this.board.dims);
    }
    return coord;
  }

}

export default Apple;

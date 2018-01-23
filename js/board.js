import Snake from './snake';
import Coord from './coord';

class Board {

  constructor(dimensions) {
    this.dims = dimensions;
    const startingPos = Math.floor(dimensions/2);
    const startingCoord = new Coord([startingPos, startingPos]);
    this.snake = new Snake(startingCoord);
    // this.apple = new Apple();
  }

}

//
// class Apple {
//
// }

export default Board;

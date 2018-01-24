import Snake from './snake';
import Coord from './coord';
import Apple from './apple';

class Board {

  constructor(dimensions) {
    this.dims = dimensions;
    const startingPos = Math.floor(dimensions/2);
    const startingCoord = new Coord([startingPos, startingPos]);
    this.apple = new Apple(this);
    this.snake = new Snake(startingCoord, this.apple);
  }

}

export default Board;

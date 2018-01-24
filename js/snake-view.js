import Board from './board';
const $free = require("../lib/freeDOM");

class View {

  constructor(htmlElement) {
    this.$el = htmlElement;
    this.board = new Board(20);
    this.snake = this.board.snake;
    this.apple = this.board.apple;
    this.setup();
    document.addEventListener('keydown', this.handleKeyEvent.bind(this));
    window.setInterval(this.step.bind(this), 200);
  }

  setup() {
    let html = "";
    for (let i = 0; i < this.board.dims; i++) {
      html += "<ul>";
      for (let j = 0; j < this.board.dims; j++) {
        html += "<li></li>";
      }
      html += "</ul>";
    }
    this.$el.html(html);
  }

  step() {
    this.snake.move();
    if (this.snake.gameOver()) {
      console.log("You lose");
      const $li = this.$el.find("li");
      $li.removeClass("snake");
      window.clearInterval(this.intervalId);
    } else {
      this.render();
    }
  }

  render() {
    const $li = this.$el.find("li");
    $li.removeClass("snake");
    $li.removeClass("apple");
    this.snake.segments.forEach((segment) => {
      const listNum = segment.x + (segment.y * this.board.dims);
      $li.eq(listNum).addClass("snake");
    });
    $li.eq(this.apple.position.x + (this.apple.position.y * this.board.dims)).addClass("apple");
  }

  handleKeyEvent(event) {
      switch (event.keyCode) {
        case 38:
          this.snake.turn("N");
          break;
        case 39:
          this.snake.turn("E");
          break;
        case 37:
          this.snake.turn("W");
          break;
        case 40:
          this.snake.turn("S");
          break;
      }
  }

}

export default View;

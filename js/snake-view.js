import Board from './board';
const $free = require("../lib/freeDOM");

class View {

  constructor(htmlElement) {
    this.$el = htmlElement;
    this.board = new Board(20);
    // debugger
    this.snake = this.board.snake;
    this.setup();
    document.addEventListener('keydown', this.handleKeyEvent.bind(this));
    // $free(window).on("keydown", this.handleKeyEvent.bind(this));
    // window.on("keydown", this.handleKeyEvent.bind(this));
    window.setInterval(this.step.bind(this), 500);
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
    // debugger
    this.$el.html(html);
  }

  step() {
    if (this.snake.gameOver()) {
      alert("You lose!");
      window.clearInterval(this.intervalId);
    } else {
      this.snake.move();
      this.render();
    }
  }

  render() {
    const $li = this.$el.find("li");
    $li.removeClass("snake");
    // $li.removeClass("square");
    this.snake.segments.forEach((segment) => {
      // debugger
      const listNum = segment.x + (segment.y * this.board.dims);
      $li.eq(listNum).addClass("snake");
    });
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

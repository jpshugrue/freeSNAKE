/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__snake_view__ = __webpack_require__(1);

const $free = __webpack_require__(2);

// window.onload = () => {
//   // debugger
//   const rootEl = $free('.freeDOMSnake');
//   new View(rootEl);
// };

$free(() => {
  // debugger
  const rootEl = $free('.freeDOMSnake');
  new __WEBPACK_IMPORTED_MODULE_0__snake_view__["a" /* default */](rootEl);
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__board__ = __webpack_require__(4);

const $free = __webpack_require__(2);

class View {

  constructor(htmlElement) {
    this.$el = htmlElement;
    this.board = new __WEBPACK_IMPORTED_MODULE_0__board__["a" /* default */](20);
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

/* harmony default export */ __webpack_exports__["a"] = (View);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(3);

function $free(arg, ...callbacks) {
  const whenLoaded = function(){
    if (typeof arg === "function") {
      arg();
    }
    callbacks.forEach ( (func) => {
      func();
    });
  };

  if (document.readyState === "complete") {
    whenLoaded();
  } else {
    document.addEventListener("DOMContentLoaded", whenLoaded);
  }

  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  } else if (typeof arg === "string") {
    const nodeList = document.querySelectorAll(arg);
    const nodes = Array.from(nodeList);
    return new DOMNodeCollection(nodes);
  }
}

$free.extend = function(mainObj, ...otherObjs) {
  otherObjs.forEach ((obj) => {
    Object.keys(obj).forEach ((key) => {
      mainObj[key] = obj[key];
    });
  });
};

$free.ajax = function(options) {
  const defaults = {
    url: "",
    method: 'GET',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    success: () => {},
    error: () => {},
    data: {}
  };
  $free.extend(defaults, options);
  const request = new XMLHttpRequest();
  request.open(defaults.method, defaults.url);
  request.onload = function () {
    if (request.status === 200) {
      defaults.success(request.response);
    } else {
      defaults.error(request.response);
    }
  };
  request.send(JSON.stringify(defaults.data));
};

// window.$free = $free;

module.exports = $free;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class DOMNodeCollection {

  constructor(nodes) {
    this.nodes = nodes;
  }

  each(callBack) {
    this.nodes.forEach(callBack);
  }

  on(eventType, action) {
    this.each((node) => {
      node.addEventListener(eventType, action);
      node.eventType = action;
    });
  }

  off(eventType) {
    this.each((node) => {
      node.removeEventListener(eventType, node.eventType);
      node.eventType = undefined;
    });
  }

  html(arg) {
    if (typeof arg === undefined) {
      return this.nodes[0].innerHTML;
    } else {
      this.each((node) => {
        node.innerHTML = arg;
      });
    }
  }

  empty() {
    this.html("");
  }

  append(content) {
    if (typeof content === "string") {
      this.each((node) => {
        node.innerHTML += content;
      });
    } else if (content instanceof (HTMLElement)) {
      this.each((node) => {
        node.innerHTML += content.outerHTML;
      });
    } else {
      this.each((node) => {
        content.each((childNode) => {
          node.appendChild(childNode.cloneNode(true));
        });
      });
    }
  }

  attr(attrName) {
    return this.nodes[0].getAttribute(attrName);
  }

  addClass(newClass) {
    this.each((node) => {
      node.classList.add(newClass);
    });
  }

  removeClass(oldClass) {
    this.each((node) => {
      node.classList.remove(oldClass);
    });
  }

  children() {
    let children = [];
    this.each((node) => {
      children.push(Array.from(node.children));
    });
    return new DOMNodeCollection(children);
  }

  parent() {
    let parents = [];
    this.each((node) => {
      if (!parents.includes(node.parentElement)) {
        parents.push(node.parentElement);
      }
    });
    return new DOMNodeCollection(parents);
  }

  find(selector) {
    let foundArr = [];
    this.each((node) => {
      const nodeList = node.querySelectorAll(selector);
      foundArr = foundArr.concat(Array.from(nodeList));
    });
    return new DOMNodeCollection(foundArr);
  }

  remove() {
    this.empty();
    this.nodes = [];
  }

  eq(index) {
    let foundEl = [];
    foundEl = [this.nodes[index]];
    return new DOMNodeCollection(foundEl);
  }

}

module.exports = DOMNodeCollection;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__snake__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coord__ = __webpack_require__(6);



class Board {

  constructor(dimensions) {
    this.dims = dimensions;
    const startingPos = Math.floor(dimensions/2);
    const startingCoord = new __WEBPACK_IMPORTED_MODULE_1__coord__["a" /* default */]([startingPos, startingPos]);
    this.snake = new __WEBPACK_IMPORTED_MODULE_0__snake__["a" /* default */](startingCoord);
    // this.apple = new Apple();
  }

}

//
// class Apple {
//
// }

/* harmony default export */ __webpack_exports__["a"] = (Board);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coord__ = __webpack_require__(6);


class Snake {

  constructor(startingCoord) {
    this.direction = "N";
    this.headCoord = startingCoord;
    this.segments = [startingCoord];
  }

  move() {
    this.headCoord = new __WEBPACK_IMPORTED_MODULE_0__coord__["a" /* default */]([this.headCoord.x, this.headCoord.y]);
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

/* harmony default export */ __webpack_exports__["a"] = (Snake);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (Coord);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
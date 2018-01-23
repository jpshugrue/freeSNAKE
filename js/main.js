import View from './snake-view';
const $free = require("../lib/freeDOM");

$free(() => {
  const rootEl = $free('.freeDOMSnake');
  new View(rootEl);
});

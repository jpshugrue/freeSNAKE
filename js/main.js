import View from './snake-view';
const $free = require("../lib/freeDOM");

// window.onload = () => {
//   // debugger
//   const rootEl = $free('.freeDOMSnake');
//   new View(rootEl);
// };

$free(() => {
  // debugger
  const rootEl = $free('.freeDOMSnake');
  new View(rootEl);
});

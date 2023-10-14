/**
 * Title: 2665. Counter II
 * URL: https://leetcode.com/problems/counter-ii/
 * Answered by @referanslar
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  const _INIT = init;

  function increment() {
    init += 1;
    return init;
  }

  function reset() {
    init = _INIT;
    return init;
  }

  function decrement() {
    init -= 1;
    return init;
  }

  return {
    increment,
    reset,
    decrement,
  };
};

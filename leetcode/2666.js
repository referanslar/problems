/**
 * Title: 2666. Allow One Function Call
 * URL: https://leetcode.com/problems/allow-one-function-call/
 * Answered by @referanslar
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let callStatus = true;

  return function (...args) {
    if (callStatus === true) {
      callStatus = false;
      return fn(...args);
    }

    return undefined;
  };
};

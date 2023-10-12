/**
 * Title: 2667. Create Hello World Function
 * URL: https://leetcode.com/problems/create-hello-world-function/
 * Answered by @referanslar
 */

/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

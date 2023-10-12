/**
 * Title: 2620. Counter
 * URL: https://leetcode.com/problems/counter/
 * Answered by @referanslar
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let number = n - 1;

  return function () {
    return (number += 1);
  };
};

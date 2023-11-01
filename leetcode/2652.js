/**
 * Title: 2652. Sum Multiples
 * URL: https://leetcode.com/problems/sum-multiples/
 * Answered by @referanslar
 */

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      result += i;
    }
  }

  return result;
};

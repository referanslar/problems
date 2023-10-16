/**
 * Title: 2635. Apply Transform Over Each Element in Array
 * URL: https://leetcode.com/problems/apply-transform-over-each-element-in-array/
 * Answered by @referanslar
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i);
  }

  return result;
};

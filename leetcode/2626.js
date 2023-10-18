/**
 * Title: 2626. Array Reduce Transformation
 * URL: https://leetcode.com/problems/array-reduce-transformation/
 * Answered by @referanslar
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let result = init;

  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }

  return result;
};

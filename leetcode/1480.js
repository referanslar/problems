/**
 * Title: 1480. Running Sum of 1d Array
 * URL: https://leetcode.com/problems/running-sum-of-1d-array/
 * Answered by @referanslar
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let result = [];
  let total = 0;

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < i; j++) {
      total += nums[j];
    }

    result.push(total);
    total = 0;
  }

  return result;
};

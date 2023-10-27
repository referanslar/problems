/**
 * Title: 1920. Build Array from Permutation
 * URL: https://leetcode.com/problems/build-array-from-permutation/
 * Answered by @referanslar
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let _nums = [];

  for (let i = 0; i < nums.length; i++) {
    _nums.push(nums[nums[i]]);
  }

  return _nums;
};

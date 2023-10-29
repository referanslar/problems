/**
 * Title: 1365. How Many Numbers Are Smaller Than the Current Number
 * URL: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 * Answered by @referanslar
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let result = [];
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        counter += 1;
      }
    }

    result.push(counter);
    counter = 0;
  }

  return result;
};

/**
 * Title: 9. Palindrome Number
 * URL: https://leetcode.com/problems/palindrome-number/
 * Answered by @referanslar
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let arr = String(x).split("");
  let reversedArr = arr.reverse();
  let reversed = reversedArr.join("");

  return x == reversed;
};

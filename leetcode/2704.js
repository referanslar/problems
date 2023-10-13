/**
 * Title: 2704. To Be Or Not To Be
 * URL: https://leetcode.com/problems/to-be-or-not-to-be/
 * Answered by @referanslar
 */

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  function toBe(_val) {
    if (val === _val) {
      return true;
    } else {
      throw Error("Not Equal");
    }
  }

  function notToBe(_val) {
    if (val !== _val) {
      return true;
    } else {
      throw Error("Equal");
    }
  }

  return {
    toBe,
    notToBe,
  };
};

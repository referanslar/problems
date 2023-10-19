/**
 * Title: 2629. Function Composition
 * URL: https://leetcode.com/problems/function-composition/
 * Answered by @referanslar
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    let _x = x;

    functions
      .slice()
      .reverse()
      .forEach((f) => {
        _x = f(_x);
      });

    return _x;
  };
};

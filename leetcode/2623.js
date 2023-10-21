/**
 * Title: 2623. Memoize 
 * URL: https://leetcode.com/problems/memoize/ 
 * Answered by @referanslar
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify([...args]); 

    if (!(key in cache)) {
      let result = fn(...args);
      cache[key] = result;

      return result;
    }

    return cache[key];
  };
}

/**
 * Title: 771. Jewels and Stones
 * URL: https://leetcode.com/problems/jewels-and-stones/
 * Answered by @referanslar
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let result = 0;

  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) {
        result += 1;
      }
    }
  }

  return result;
};

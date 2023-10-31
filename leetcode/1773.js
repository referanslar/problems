/**
 * Title: 1773. Count Items Matching a Rule
 * URL: https://leetcode.com/problems/count-items-matching-a-rule/
 * Answered by @referanslar
 */

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const keyIndex = {
    type: 0,
    color: 1,
    name: 2,
  }[ruleKey];

  return items.filter((item) => item[keyIndex] === ruleValue).length;
};

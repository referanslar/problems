/**
 * Title: 2469. Convert the Temperature
 * URL: https://leetcode.com/problems/convert-the-temperature/
 * Answered by @referanslar
 */

/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  let kelvin = celsius + 273.15;
  let fahrenheit = celsius * 1.8 + 32.0;

  return [kelvin, fahrenheit];
};

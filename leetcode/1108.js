/**
 * Title: 1108. Defanging an IP Address
 * URL: https://leetcode.com/problems/defanging-an-ip-address/
 * Answered by @referanslar
 */

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.replace(/\./g, "[.]");
};

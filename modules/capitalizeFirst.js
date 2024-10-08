// capitalizeFirst.js
// This module provides a function just to capitalize the first letter of a string

import validateParam from "./validateParam.js";

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to be capitalized.
 * @returns {string} The string with the first letter capitalized.
 * @throws {Error} If the parameter is not a string.
 */
const capitalizeFirst = (str) => {
  validateParam(str); // Validate if the parameter is a string
  let fCharCap = str[0].toUpperCase(); // Capitalize the first letter
  let remainStr = str.slice(1); // Take rest of the string
  return fCharCap + remainStr; // Return the combined result
};

export default capitalizeFirst;

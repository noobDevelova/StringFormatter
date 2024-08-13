// capitalizeFirst.js
// This module provides a function to capitalize the first letter of a string
// and convert the rest of the string to lowercase.

import validateParam from "./validateParam.js";

/**
 * Capitalizes the first letter of a string and converts the remaining characters to lowercase.
 * @param {string} str - The string to be capitalized.
 * @returns {string} The string with the first letter capitalized.
 * @throws {Error} If the parameter is not a string.
 */
const capitalizeFirstAndFix = (str) => {
  validateParam(str); // Validate if the parameter is a string
  let fCharCap = str[0].toUpperCase(); // Capitalize the first letter
  let remainStr = str.slice(1).toLowerCase(); // Convert the rest of the string to lowercase
  return fCharCap + remainStr; // Return the combined result
};

export default capitalizeFirstAndFix;

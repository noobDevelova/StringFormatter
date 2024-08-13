// capitalizeFullName.js
// This module provides a function to capitalize the first letter of each name in a full name string.

import capitalizeSingleName from "./capitalizeSingleName.js";
import validateParam from "./validateParam.js";

/**
 * Capitalizes the first letter of each name in a full name string.
 * @param {string} fullName - The full name string to be capitalized.
 * @returns {string} The full name with each name capitalized.
 */
const capitalizeFullName = (fullName) => {
  validateParam(fullName); // Validate if the parameter is a string
  let fullNameSplitted = fullName.split(" "); // Split the full name into individual names
  return fullNameSplitted
    .map((name) => {
      return capitalizeSingleName(name); // Capitalize each name
    })
    .join(" "); // Join the capitalized names back into a full name
};

export default capitalizeFullName;

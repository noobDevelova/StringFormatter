// validateParam.js
// This module provides a utility function to validate if a given parameter is a string.

/**
 * Validates if the provided parameter is a string.
 * @param {*} str - The parameter to be validated.
 * @throws {Error} If the parameter is not a string.
 */
const validateParam = (str) => {
  if (typeof str !== "string") {
    throw Error("Parameter must be a string!"); // Throw an error if the parameter is not a string
  }
};

export default validateParam;

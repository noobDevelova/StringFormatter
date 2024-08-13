// capitalizeAll.js
// This module provides a function to capitalize all letter of a string 

import validateParam from "./validateParam.js"

/**
 * Capitalizes all letter of a string.
 * @param {string} name - The name to be capitalized.
 * @returns {string} The name with all letter capitalized.
 */
const capitalizeAll = (name) => {
    validateParam(name); // Validate if the parameter is a string
    return name.toUpperCase(); // Return the capitalized string
}

export default capitalizeAll;
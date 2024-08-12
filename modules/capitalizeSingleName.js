// capitalizeSingleName.js
// This module provides a function to capitalize the first letter of a single name.

import capitalizeFirst from "./capitalizeFirst.js";

/**
 * Capitalizes the first letter of a single name.
 * @param {string} fname - The name to be capitalized.
 * @returns {string} The name with the first letter capitalized.
 */
const capitalizeSingleName = (fname) => {
    return capitalizeFirst(fname);  // Use the capitalizeFirst function to capitalize the name
}

export default capitalizeSingleName;
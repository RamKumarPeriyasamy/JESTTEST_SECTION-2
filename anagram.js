// anagram.js
function isAnagram(str1, str2) {
    return cleanString(str1) === cleanString(str2);
}

function cleanString(str) {
    return str
        .replace(/[^\w]/g, '')   // Remove non-word characters
        .toLowerCase()           // Convert to lowercase
        .split('')               // Split into characters
        .sort()                  // Sort alphabetically
        .join('');               // Join back into a string
}

module.exports = isAnagram;

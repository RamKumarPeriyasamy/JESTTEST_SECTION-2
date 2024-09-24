// anagram.test.js
const isAnagram = require('../anagram');  // Import the function

test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy(); // Fixed typo toBeTruthy
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is not an anagram of "Aloha"', () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});

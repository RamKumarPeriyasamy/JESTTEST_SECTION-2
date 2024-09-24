
const reverseString = require('../reversestring');

test('reverseString function exsists ', () => {
    expect(reverseString).toBeDefined();

});

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');

});

test('String reverses with uppercase', () => {
    expect(reverseString('HeLlo')).toEqual('olleh');

});
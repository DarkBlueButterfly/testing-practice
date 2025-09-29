// capitalize - takes string and returns it with first character capitalized
const capitalize = require('./code/capitalize')
test('capitalize', () => {
    expect(capitalize('test')).toBe('Test');
})

const reverseString = require('./code/reverse-string')
test('reverse the string', () => {
    expect(reverseString('yes')).toBe('sey');
})

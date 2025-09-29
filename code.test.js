// capitalize - takes string and returns it with first character capitalized
const capitalize = require('./code/capitalize')
test.skip('capitalize', () => {
    expect(capitalize('test')).toBe('Test');
})

// reverseString - takes string and reverses it
const reverseString = require('./code/reverse-string')
test.skip('reverse the string', () => {
    expect(reverseString('yes')).toBe('sey');
})

// calculator - contains function for basic operation 
const calculator = require('./code/calculator')
test.skip('addition', () => {
    expect(calculator.add(2, 3)).toBe(5);
})

test.skip('subtraction', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
})

test.skip('divide', () => {
    expect(calculator.divide(6, 2)).toBe(3);
})

test.skip('multiply', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
})

// caesarCipher - takes string and return shift factored string
const caesarCipher = require('./code/caesar-cipher')

describe('Caesar Cipher', () => {
    test('test wrapping', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('case preservation', () => {
        expect(caesarCipher('Hello', 3)).toBe('Khoor');
    });

    test('test punctuation', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });

})

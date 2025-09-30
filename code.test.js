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
describe.skip('calculator', () => {
    test('addition', () => {
        expect(calculator.add(2, 3)).toBe(5);
    })

    test('subtraction', () => {
        expect(calculator.subtract(4, 2)).toBe(2);
    })

    test('divide', () => {
        expect(calculator.divide(6, 2)).toBe(3);
    })

    test('multiply', () => {
        expect(calculator.multiply(4, 2)).toBe(8);
    })
})

// caesarCipher - takes string and return shift factored string
const caesarCipher = require('./code/caesar-cipher')
describe.skip('Caesar Cipher', () => {
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

// analyzeArray - takes an array of numbers and returns object
const analyzeArray = require('./code/analyze-array')
const arr = [1, 8, 3, 4, 2, 6];
describe('analyze array', () => {
    test('object return', () => {
        expect(analyzeArray(arr)).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        })
    })
})

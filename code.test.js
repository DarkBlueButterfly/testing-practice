// capitalize - takes string and returns it with first character capitalized
const capitalize = require('./code/capitalize')
test('capitalize', () => {
    expect(capitalize('test')).toBe('Test');
})

// reverseString - takes string and reverses it
const reverseString = require('./code/reverse-string')
test('reverse the string', () => {
    expect(reverseString('yes')).toBe('sey');
})

// calculator - contains function for basic operation 
const calculator = require('./code/calculator')
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

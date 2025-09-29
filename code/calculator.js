
// Doesn't work with the test:
// function calculator(a, b) {
//     const add = () => {return a + b};
//     const subtract = () => {return a - b};
//     const divide = () => {return a / b};
//     const multiply = () => {return a * b};

//     return ( add, subtract, divide, multiply );
// }

// Calculator object containing functions:
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        return a / b;
    },
    multiply: function(a, b) {
        return a * b;
    }
}

module.exports = calculator;

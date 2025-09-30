
function analyzeArray(arr) {
    const sum = arr.reduce((accumulator, current) => accumulator + current, 0);
    average = sum / arr.length;
    min = Math.min(...arr);
    max = Math.max(...arr);
    length = arr.length;
    return {
        average,
        min,
        max,
        length
    }
}

module.exports = analyzeArray;

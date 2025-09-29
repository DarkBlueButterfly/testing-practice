
function capitalize(string) {
    // let firstChar = string.charAt(0).toUpperCase();
    // let rest = string.slice(1);
    // return firstChar + rest;
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;

function caesarCipher(string, shift) {
    return string
        .split('')
        .map(char => shiftChar(char, shift))
        .join('');
}

// character codes: 65(A) - 90(Z), 97(a) - 122(z)
function shiftChar(char, shift) {
    const charCode = char.charCodeAt();
    if (charCode >= 65 && charCode <= 90) return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    if (charCode >= 97 && charCode <= 122) return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);

    return char;
}

module.exports = caesarCipher;

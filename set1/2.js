/**
 * Fixed XOR
 * Write a function that takes two equal-length buffers and
 * produces their XOR combination.
 */

module.exports = function fixedXOR(input1, input2) {
    if (input1.length !== input2.length) {
        throw new Error('Inputs must been equal length.')
    }

    // Iterate over the first input
    // For each character, XOR against the character in the same position
    // of the second input.
    // Result is an integer; convert to hex.
    return input1.split('').map(function(char, index, stringAsArray) {
        return (parseInt(char, 16) ^ parseInt(input2[index], 16))
            .toString('16')

        // return (('0x' + char) ^ ('0x' + input2[index]))
        //     .toString('16');
    }).join('');
}

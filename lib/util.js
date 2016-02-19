/**
 * Convert a hex string into base64
 */

function hexToBase64(input) {
    var buffer = new Buffer(input, 'hex');
    return buffer.toString('base64');
}

function charToBinary(input) {
    return input.charCodeAt(0).toString(2);
}

function strToBinary(input) {
    return input.split('')
        .map(charToBinary)
        .join('');
}

/**
 * @param  {Number} x number
 * @return {Number}   count of 1s in the binary rep of x
 */
function countOnes(x) {
    var y = 0;
    while(x) {
        // increment if last bit is 1s
        y += x &  1 ;
        // shift bits left
        x  = x >> 1 ;
    }
    return y;
}

module.exports = {
    hexToBase64,
    charToBinary,
    strToBinary,
    countOnes
}

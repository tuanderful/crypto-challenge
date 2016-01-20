'use strict';

var INPUT = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';

/**
 * Takes in two hexcodes.
 * Returns a hexode.
 */
function hexXOR(a, b) {
    return ('0x' + a ^ '0x' + b)
        .toString('16');
}


function singleByteXOR(message, hexKey) {
    var output = [];

    // Every two char of the input is a hexcode.
    // Iterate over each hexcode, XOR with the key
    for (let i = 0; i < INPUT.length; i += 2) {
        let hexChar = INPUT.slice(i, i + 2);
        output.push(hexXOR(hexChar, hexKey));
    }

    // output is an array of hexcodes. convert using fromCharCode

    return output.map(function(hex) {
        // fromCharCode takes an integer, returns a character
        return String.fromCharCode('0x' + hex);
    }).join('');
}


function etoainScore(string) {
    var matches = string.match(/[ETOAINetoain]/g);
    return matches ? matches.length : 0;
}


// -----------------------------------------------------------------------------
for (let i = 0; i < 256; i++) {
    // convert key to hexcode, then
    var decodedMessage = singleByteXOR(INPUT, i.toString('16'));
    var score = etoainScore(decodedMessage);

    if (score > 10) {
        console.log(`key: ${i}  score: ${score}`);
        console.log(decodedMessage + '\n');
    }
}

/**
 * -----------------------------------------------------------------------------
 * Results
 * -----------------------------------------------------------------------------

    key: 82  score: 12
    Ieeacdm*GI-y*fcao*k*zedn*el*hkied

    key: 88  score: 13
    Cooking MC's like a pound of bacon

    key: 120  score: 13
    cOOKINGmcSLIKEAPOUNDOFBACON

 */

'use strict';

var INPUT = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';

/**
 * Takes in two string hexcodes.
 * Returns a hexode.
 */
function hexXOR(a, b) {
    var ret = ('0x' + a ^ '0x' + b).toString('16');

    return ret.length === 1 ? '0' + ret : ret;
}


/**
 * [singleByteXOR description]
 * @param  {string} message hex encoded message
 * @param  {string} hexKey  2 char string
 * @return {string}         decoded message, in hex
 */
function singleByteXOR(message, hexKey) {
    var output = [];

    // Every two char of the input is a hexcode.
    // Iterate over each hexcode, XOR with the key
    for (let i = 0; i < message.length; i += 2) {
        let hexChar = message.slice(i, i + 2);
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


/**
 * -----------------------------------------------------------------------------
 * Return a map of scores.
 * Key: score
 * Value: {
 *   key
 *   result
 * }
 *
 * threshold
 */
function computeEtoainScores(input, threshold) {
    var resultsMap = {};

    for (let i = 0; i < 256; i++) {
        // convert key to hexcode
        var decodedMessage = singleByteXOR(input, i.toString('16'));
        var score = etoainScore(decodedMessage);

        if (resultsMap[score] === undefined) {
            resultsMap[score] = [];
        }
        resultsMap[score].push({
            key: i,
            message: decodedMessage
        })
    }

    // Trim results based off threshold
    threshold = typeof threshold === 'undefined' ? 1 : threshold;
    Object.keys(resultsMap).forEach(function(score) {
        if (score < threshold) {
            delete resultsMap[score];
        }
    });

    return resultsMap;
}

// console.log(computeEtoainScores(INPUT));

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

module.exports = {
    hexXOR,
    computeEtoainScores
}

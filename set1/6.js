/**
 * Decrypt 6.txt
 *
 * 1. Let KEYSIZE be the guessed length of the key; try values from 2 to (say) 40.
 *
 * 2. Write a function to compute the edit distance/Hamming distance between
 *    two strings. The Hamming distance is just the number of differing bits.
      The distance between:
        this is a test
      and
        wokka wokka!!!
      is 37. Make sure your code agrees before you proceed.
 */

var countOnes = require('../lib/util.js').countOnes;

function computeHammingDistance(str1, str2) {
    var length = Math.max(str1.length, str2.length);
    var i;

    var distance = 0;

    for ( i = 0; i < length; i++) {
        var a = str1.charCodeAt(i);     // returns a number, 116 for t, etc.
        var b = str2.charCodeAt(i);

        // XOR the charcodes to find differing bits (result is a number)
        inputCharsXOR = (a ^ b);

        distance += countOnes(inputCharsXOR);
    }

    console.log(distance);
    return distance;
};


computeHammingDistance('this is a test', 'wokka wokka!!!');



module.exports = {
    computeHammingDistance
}

/**
 * Implement repeating-key XOR
    Here is the opening stanza of an important work of the English language:

        Burning 'em, if you ain't quick and nimble
        I go crazy when I hear a cymbal

    Encrypt it, under the key "ICE", using repeating-key XOR.

    In repeating-key XOR, you'll sequentially apply each byte of the key; the
    first byte of plaintext will be XOR'd against I, the next C, the next E,
    then I again for the 4th byte, and so on.

    It should come out to:

    0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272
    a282b2f20430a652e2c652a3124333a653e2b2027630c692b20283165286326302e27282f

    Encrypt a bunch of stuff using your repeating-key XOR function.
    Encrypt your mail. Encrypt your password file. Your .sig file.
    Get a feel for it. I promise, we aren't wasting your time with this.
 */

var INPUT = "Burning 'em, if you ain't quick and nimble\nI go crazy when I hear a cymbal";
var KEY = "ICE";

var hexXOR = require('./3.js').hexXOR;

// <string>.charCodeAt(x) - gives the unicode value for the character in position x of <string>
//


function repeatingKeyXOR(message, key) {
    var keyLength = key.length;
    var output = [];

    message.split('').forEach(function(curr, index, array) {
        var offset = index % keyLength;

        var messageCharHex = message.charCodeAt(index).toString(16);
        var keyCharHex = key.charCodeAt(offset).toString(16);

        output.push(hexXOR(messageCharHex, keyCharHex));
    });

    return output.join('');
}


// console.log(repeatingKeyXOR(INPUT, KEY));


module.exports = {
    repeatingKeyXOR
}

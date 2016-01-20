var hexToBase64 = require('../set1/1.js');

module.exports = {
    'Correctly convert hex to base64' : function(test) {
        test.expect(1);
        test.equal(
            'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t',
            hexToBase64('49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d')
        );
        test.done();
    },
    // 'Test 1' : function(test) {
    //     test.expect(1);
    //     test.ok(true, "This shouldn't fail");
    //     test.done();
    // },
    // 'Test 2' : function(test) {
    //     test.expect(2);
    //     test.ok(1 === 1, "This shouldn't fail");
    //     test.ok(false, "This should fail");
    //     test.done();
    // }
};

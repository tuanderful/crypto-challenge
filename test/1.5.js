var repeatingKeyXOR = require('../set1/5.js').repeatingKeyXOR;

module.exports = {
    'Fixed XOR' : function(test) {
        test.expect(1);

        var INPUT = "Burning 'em, if you ain't quick and nimble\n" +
                    "I go crazy when I hear a cymbal";
        var KEY = "ICE";
        var OUTPUT = '0b3637272a2b2e63622c2e69692a23693a2a3c6324202d62' +
                     '3d63343c2a26226324272765272a282b2f20430a652e2c65' +
                     '2a3124333a653e2b2027630c692b20283165286326302e27282f';

        test.equal(
            OUTPUT,
            repeatingKeyXOR(INPUT, KEY)
        );
        test.done();
    }
};

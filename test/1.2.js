var fixedXOR = require('../set1/2.js');

module.exports = {
    'Fixed XOR' : function(test) {
        test.expect(1);

        var input1 = '1c0111001f010100061a024b53535009181c';
        var input2 = '686974207468652062756c6c277320657965';
        var output = '746865206b696420646f6e277420706c6179';

        test.equal(
            output,
            fixedXOR(input1, input2)
        );
        test.done();
    }
};

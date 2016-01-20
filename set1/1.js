// TODO operate on raw bytes, never on encoded strings.
module.exports = function hexToBase64(input) {
    var buffer = new Buffer(input, 'hex');
    return buffer.toString('base64');
}

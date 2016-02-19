var colors = require('colors');

/**
 * Detect single-character XOR
 * One of the 60-character strings in this file has
 * been encrypted by single-character XOR.
 */

const THRESHOLD = 12;

const computeEtoainScores = require('./3.js').computeEtoainScores;

const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    terminal: false,
    input: fs.createReadStream('4.txt')
});


var lineNumber = 1;
rl.on('line', function (line) {
    var scores = computeEtoainScores(line, THRESHOLD);

    if (Object.keys(scores).length > 0) {
      console.log(`Line ${lineNumber} from file: ${line}`.cyan);
      console.log(scores);
   }

    lineNumber++;
});


/*

Line 171 from file: 7b5a4215415d544115415d5015455447414c155c46155f4058455c5b523f
{ '12':
   [ { key: 21,
       message: 'nOW\u0000THAT\u0000THE\u0000PARTY\u0000IS\u0000JUMPING*' },
     { key: 53, message: 'Now that the party is jumping\n' } ] }

 */

console.time('overall time');
const fs = require('fs');

const filename = './2020sum.txt';
let counter = 0;

function permute(input) {
  let i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  console.log(permArr)
  return permArr
};


fs.readFile(filename, 'utf8', function(err, data) {  
    console.time('func only')

    if (err) throw err;

    const dataArr = data.split('\n');

    var permArr = [],
    usedChars = [];

    permute(dataArr);

    // console.log(result.filter(Boolean))
    console.timeEnd('func only');

  });


console.timeEnd('overall time');


const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, './Day6part1inputDeclarations.txt');

let resultTotalSum = 0;

function populateRepeatingChar(string) {
    let accArr = {' ': 1};
    string
      .split('')
      .forEach(function(x) { 
        accArr[x] = (accArr[x] || 0)+1;
      })
      // .join('');
      return accArr
    }

function countLinesAgainstMatches(arr) {
  let subCount = 0;
  for (let key in arr) {
    if (arr.hasOwnProperty(key) && (arr[key] >= arr[' '] || !arr[' '])) {
      subCount++
        // console.log(key + " -> " + arr[key]);
    }
} return subCount-1
}

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;

    const dataArr = [];
    // first we need to parse the data and split into JS array:
    data.split(/\n\n/g)                             //split by double new line character
    .map(v => dataArr.push(v.replace(/\n/g, ' ')    // cut out caret caracter within subObjects and
    ))                                   // split by spaces .split(' ')

    dataArr.forEach( s => {
        let x = populateRepeatingChar(s);
        let y = countLinesAgainstMatches(x);
        resultTotalSum = resultTotalSum + y;
        console.log('adding ', y, 'to totalCount which is currently =', resultTotalSum, 'and the current string is ', s)
    })

    console.log(resultTotalSum)

})
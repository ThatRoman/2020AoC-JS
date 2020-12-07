const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, './Day6part1inputDeclarations.txt');

function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('').replace(" ", "");
  }


fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;

    const dataArr = [];
    // first we need to parse the data and split into JS array:
    data.split(/\n\n/g)                             //split by double new line character
    .map(v => dataArr.push(v.replace(/\n/g, ' ')    // cut out caret caracter within subObjects and
    ))                                   // split by spaces .split(' ')

    let totalCount = 0;
    dataArr.forEach( s => {
        let x = removeDuplicateCharacters(s).length;
        console.log('adding', x, 'to totalCount which is currently =', totalCount, 'and the current string is ', s)
        totalCount = totalCount + x
    })

    console.log(totalCount)

})
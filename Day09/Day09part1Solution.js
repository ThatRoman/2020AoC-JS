
const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, './Day09inputDecode.txt');

let data = fs.readFileSync(filename, 'utf8', function(err, data) {
  if (err) throw err;
})

let input = [];
data.split(/\n/g).forEach( s => {  
  input.push(Number(s))
})
function findInvalid() {
  let possibleParents = [];
  for(let i = 0; i < input.length; i++){
    let current = input[i];
    if (i < 25){ // specify the number of first characters conbtaining preamble here
      possibleParents.push(current);
    }
    else {
      let length = possibleParents.length;
      for (let j = 0; j < length; j++){
        if(j === length-1){
          console.log('Cannot find parents for ', current) // if we confirmed that it has valid parents -> move onto the next line
          return current
        }
        for (let k = j + 1; k < length; k++){
          if (current === possibleParents[j] + possibleParents[k]){
            j = Infinity;
          }
        }
      }


      possibleParents.shift();
      possibleParents.push(current)
    }
  }
}

findInvalid();
// 




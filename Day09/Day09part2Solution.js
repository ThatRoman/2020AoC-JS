
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

const invalid = findInvalid(25); // specify the number of first characters conbtaining preamble here
findContiguousArray(invalid);
// 

function findInvalid(preambleSize) {
  let possibleParents = [];
  for(let i = 0; i < input.length; i++){
    let current = input[i];
    if (i < preambleSize){ 
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

function findContiguousArray(sum){
  console.log
  let inputLength = input.length;
  for (let i = 0; i < inputLength; i++){
    let j = i;
    let tempSum = 0;
    let contiguousArray = [];
    while (tempSum < sum){
      contiguousArray.push(input[j])
      tempSum += input[j];
      j++;
    }
    if (tempSum === sum && sum != input[j]){
      console.log('we\'ve got it Houston', tempSum, sum, contiguousArray)
      let min = contiguousArray[0];
      let max = contiguousArray[0];
      for(let i = 1; i< contiguousArray.length; i++){
        if(contiguousArray[i] > max){
          max = contiguousArray[i];
        }
        if(contiguousArray[i] < min){
          min = contiguousArray[i];
        }
      }
      console.log('the answer is', min+max)
      return min + max
    }
  }
}

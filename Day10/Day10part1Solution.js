const { throws } = require('assert');
const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, './Day10inputAdapters.txt');

let data = fs.readFileSync(filename, 'utf8', function(err, data) {
  if (err) throw err;
})

let input = [];
data.split(/\n/g).forEach( s => {  
  input.push(Number(s))
})
// add '0' socket, sort and add inbuilt adapter (+3 to max)
input.push(0);
input.sort((a, b) => a - b)
input[input.length] = input[input.length-1] + 3;

let numOf1jumps = 0;
let numOf2jumps = 0;
let numOf3jumps = 0;

for (let i = 1; i < input.length; i++){
    let joltage = input[i] - input[i-1];
    if (joltage === 1){
        numOf1jumps += 1;
    }
    if (joltage === 2){
        numOf2jumps += 1;
    }
    if (joltage === 3){
        numOf3jumps += 1;
    }
}

console.log(numOf1jumps*numOf3jumps)
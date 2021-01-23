const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, './Day8inputHandHeldGame.txt');

let data = fs.readFileSync(filename, 'utf8', function(err, data) {
  if (err) throw err;
})

let instructions = [];

data.split(/\n/g).forEach( s => {  
  instructions.push(s)
})


// 
function executeInstructionSet(instructions){
  let acc = 0;
  let index = 0;
  let seenIndexes = new Set();
  while(!seenIndexes.has(index) && index < instructions.length){
    readLine(index)
  }
  // console.log('after a while', seenIndexes, seenIndexes.has(index), index)

  function readLine(i){
    let line = instructions[i];
    seenIndexes.add(i);
    if(line.substring(0,3) === 'nop'){
      index++;
      // console.log('skipping. the index now', index)
    }
    else if(line.substring(0,3) === 'acc'){
      index++;
      acc+= Number(line.split(/\s/)[1]);
      // console.log('adding to acc. It is now = ', acc, 'the index now', index)
    }
    else if(line.substring(0,3) === 'jmp'){
      index += Number(line.split(/\s/)[1]);
      // console.log('jumping. the index now', index)
    }
  }
  // One while loop exits - return string where it stopped
  if (!seenIndexes.has(index))
    console.log(acc)
}


//for each string replace jmp with nop and run executeInstructionSet to see if it reaches the EOF;

for (let i = 0; i < instructions.length; i++){
  replaceWrongInstruction(i);
  executeInstructionSet(instructions);
  // replace back and try next
  replaceWrongInstruction(i)
}

// helper to swap jmp and nop
function replaceWrongInstruction(i){
  let line = instructions[i];
    // console.log('changing instruction for line:', line)
    let [a, b] = line.split(/\s/g);
    // console.log(a,b, 'a & b')
    if(a === 'nop'){
      instructions[i] = 'jmp ' + b;
    } 
    else if(a === 'jmp'){
      instructions[i] = 'nop ' + b;
    } 
    // console.log('the line after the swap - ', instructions[i])
}
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
  while(!seenIndexes.has(index)){
    console.log('here I am. the index is:', index, 'seen - ', seenIndexes)
    readLine(index)
  }
  console.log('after a while', seenIndexes, seenIndexes.has(index), index)

  function readLine(i){
    let line = instructions[i];
    console.log(line.substring(0,3), )
    seenIndexes.add(i);
    if(line.substring(0,3) === 'nop'){
      index++;
      console.log('skipping. the index now', index)
    }
    else if(line.substring(0,3) === 'acc'){
      index++;
      acc+= Number(line.split(/\s/)[1]);
      console.log('adding to acc. It is now = ', acc, 'the index now', index)
    }
    else if(line.substring(0,3) === 'jmp'){
      index += Number(line.split(/\s/)[1]);
      console.log('jumping. the index now', index)
    }
  }
  // One while loop exits - return string where it stopped
  return acc
}


console.log(executeInstructionSet(instructions))
const { count } = require('console');
const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, './Day7inputTags.txt');

const adjacencyList = new Map();

function addNode(bag) {
  adjacencyList.set(bag, []);
}

function addEdge(parent, child){
  adjacencyList.get(parent).push(child)
}

const parentalList = new Map();

function addChildNode(bag){
  parentalList.set(bag, []);
}
function addParentToChild(parent, child){
  if (!parentalList.has(child)){
    addChildNode(child)
  }

  parentalList.get(child).push(parent)
}

tags = fs.readFileSync(filename, 'utf8', function(err, data) {
  if (err) throw err;      
})

// first we need to parse the data and split into JS object based on 'contains' word:
tags.replace(/\sbags?\s?/g,'').split(/\.\n/g).forEach( s => {   // ReGex to get rid of repeating word Bag(s) and spaces around it
  let [a, b] = s.split('contain ');                             // Devide into source and destination bags
    addNode(a);                                                 // add sources to our adjacencyList
    b.replace(/\d\s/g,'')                                       // !!!!!!!_____ remove number of bags _____!!!!!!! may come back in part II
      .split(', ')
      .forEach( subBag => {
      if (!subBag.includes('no other')){                        // if the bag can have no other bags => skip
        addEdge(a,subBag)
        addParentToChild(a,subBag)
      }
    })
})
// console.log(adjacencyList)

console.log(compileListOfEventualParents('shiny gold').size)

function compileListOfEventualParents(child){
  let result = new Set();  // use Set not to revisit same nodes
  const queue = [child];
  while (queue.length > 0){
    console.log(queue)
    const node = queue.shift();
    const parentBags = parentalList.get(node);
    for (let i = 0; parentBags && i < parentBags.length; i++){
      let parentBag = parentBags[i];
      if(!result.has(parentBag)){
        console.log(parentBag)
        result.add(parentBag);
        queue.push(parentBag);
      }
    }
  }

  return result
}
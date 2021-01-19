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

let dijkstraDistancesAndPrevious = new Map();
let visiteDijkstra = [];
let unvisitedDijkstra = [];

tags = fs.readFileSync(filename, 'utf8', function(err, data) {
  if (err) throw err;      
})

// first we need to parse the data and split into JS object based on 'contains' word:
tags.replace(/\sbags?\s?/g,'').split(/\.\n/g).forEach( s => {   // ReGex to get rid of repeating word Bag(s) and spaces around it
  let [a, b] = s.split('contain ');                             // Devide into source and destination bags
    addNode(a);                                                 // add sources to our adjacencyList
    b.split(',')
      .forEach( subBag => {
        if (!subBag.includes('no other')){  
          // console.log(a, subBag)                      // if the bag can have no other bags => skip
          addEdge(a,subBag.trim());
          unvisitedDijkstra.push(a);
          // create a default dijkstra table with Infinity distances and no previous nodes
            if (a === 'shiny gold'){
              dijkstraDistancesAndPrevious[a] = [0, null]
            } else {
              dijkstraDistancesAndPrevious[a] = [Infinity, null]
            
          }
        }
    })
})
// console.log(adjacencyList)


console.log(traverse('shiny gold') - 1)

function traverse(child){
  
    let count = 1;
    let listOfSubBags = adjacencyList.get(child)
    console.log('the main bag is :', child, 'the listOfSubBags is:', listOfSubBags)
    // 2 base cases: the string doesn't exist return 0 to multiply, and it exist but has no bags in it >> return 1 to multiply

    // recursive case keep multiplying bags by other bags in it
    for (let subBag of listOfSubBags){
          let [a, b] = subBag.split(/(?<=\d)\s/g); // split by regex Digit followed by a whitespace but do not include the digit into split
          a = Number(a); b.trim();
          console.log('_________________current count is:', count, 'adding a =', a)
          count +=  a * traverse(b);
          
    }
    return count
  }

 
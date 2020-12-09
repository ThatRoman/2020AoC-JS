const { count } = require('console');
const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, './Day7inputTags.txt');

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;

    // first we need to parse the data and split into JS object based on 'contains' word:
    var dataJson = {};
    data.replace(/\sbags?\s/g,'').split(/\.\n/g).forEach( s => {   // ReGex to get rid of repeating word Bag(s) and spaces around it
      let [a, b] = s.split('contain');
        dataJson[a] = b;
          // console.log(' the current string is ', s)
      })
      var giantTree = {};
      var redundant = 0;
      // console.log('example of data \'shiny gold\'', dataJson['shiny gold'])
      for (let key in dataJson) {                 //using destructured keys in dataJson to put into a new Obj
        if (dataJson.hasOwnProperty(key)) {       // then checking if it even exist
          if (giantTree[key]){                    // if it already exist in our new Obj -> warn me and add exra counter in order to avoid collision
            console.error('found redundancy for:', key)
            redundant++;
            giantTree[key] = redundant.toString() + destructStr(dataJson[key],dataJson)
            }
          else {giantTree[key] = destructStr(dataJson[key],dataJson) }
        }
    }
    // console.log();
    console.log(giantTree['shiny gold'], '< shiny gold\n', giantTree);

    // containers.push(...checkForBag(dataJson, 'shiny gold'));

})

// Function to break down a string of rules to find all of the possible bags it contains
const destructStr = function(str, passedArr, acc) {
  console.log('processing', str)
  if(!str instanceof String || str.length < 17){console.log('returning: ', str); return str}
  else {
    var arr = str.split(', ')
    // console.log('substrings are:', arr)
    arr.forEach(subBag => {
      // let n = Number(subBag.slice(0,2)); // Define the depth for each element (number of sub-bags it can have)
      if(!str.includes('no other') && subBag){
        var justColor = passedArr[subBag.replace(/\sbags?/g,'').trim().slice(2)];
        console.log('inside FOR loop... sending to recursion:', justColor,'//arr length', arr.length, 'current subBag value is', subBag)
        return str.concat(destructStr(justColor, passedArr));
      } else {console.log('ELSE RETURN TRUE'); return str.concat('no other')};
  })
}
}
                                        // Function that takes in JSON and the bag type and spits out list of
const checkForBag = function(json, bagType){  // found direct holders
  const tmp = [];
  tmp.push(bagType);
  for (let [key, value] of Object.entries(json)) {
    if (containers.includes(...newBag)){
      console.log(...newBag, 'is already on the list... skipping')
    }
    else {
      if (value.includes(bagType)) {
        tmp.push(key);
        console.log(bagType, 'Found', 'in', key,'which contains', value)
        }  
    }
  }
  return tmp
}
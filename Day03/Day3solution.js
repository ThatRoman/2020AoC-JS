const fs = require('fs');

const filename = './Day3inputSlope.txt';

// 1. read *.txt file and convert into array of arrays (matrix)

fs.readFile(filename, 'utf8', function(err, data) {  
    if (err) throw err;

    const dataArr = data.split('\n');
    let counter = 0;
    let index = 0;

    // 2. loop through array of arrays and access [x] element of each subarray
    // x - being a variable assigned 0 at first which is increased by 3 
    // each step of .forEach loop below
    dataArr.forEach((element, i) => {

        // 3. add to the global counter each time the symbol is equals to "#"
        if(element[index] === "#") {
            counter++;
            // console.log(`Found a tree on line ${i}`)
        }       

        index = index + 3;
        // 4. check if index reaches the end of a subarray - subtract the length of subarray
        // from the index in order to simulate infinite forest recplication
        if(index > element.length - 1){
            index = index - element.length;
        }
         
    }); 
    console.log(`Program has found ${counter} trees on your path given the input`)
});
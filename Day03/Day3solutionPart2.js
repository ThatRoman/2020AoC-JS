const fs = require('fs');

const filename = './Day3inputSlope.txt';

// 1. read *.txt file and convert into array of arrays (matrix)

fs.readFile(filename, 'utf8', function(err, data) {  
    if (err) throw err;

    const dataArr = data.split('\n');
    let result = 0;
    result = oneRightOneDown(dataArr) * threeRightOneDown(dataArr) * fiveRightOneDown(dataArr) * sevenRightOneDown(dataArr) * oneRighTwoDown(dataArr);
    console.log(oneRightOneDown(dataArr) , threeRightOneDown(dataArr) , fiveRightOneDown(dataArr))
    console.log(`Program has found ${result} multiplied trees on your paths given the input`)
});

// Right 1, down 1.
function oneRightOneDown (input){
    let counter = 0;
    let index = 0;
    input.forEach((element, i) => {
        // loop through array of arrays and access [x] element of each subarray
        // x - being a variable assigned 0 at first which is increased by 1 
        // each step of .forEach loop below

        // 3. add to the global counter each time the symbol is equals to "#"
        if(element[index] === "#") {
            counter++;
            // console.log(`Found a tree on line ${i}`)
        }       

        index++;
        // 4. check if index reaches the end of a subarray - subtract the length of subarray
        // from the index in order to simulate infinite forest replication
        if(index > element.length - 1){
            index = index - element.length;
    }
    return counter
}); return counter
}
// (Right 3, down 1)
function threeRightOneDown (input){
    let counter = 0;
    let index = 0;
    input.forEach((element, i) => {
        // loop through array of arrays and access [x] element of each subarray
        // x - being a variable assigned 0 at first which is increased by 3 
        // each step of .forEach loop below

        // 3. add to the global counter each time the symbol is equals to "#"
        if(element[index] === "#") {
            counter++;
            // console.log(`Found a tree on line ${i}`)
        }       

        index = index + 3;
        // 4. check if index reaches the end of a subarray - subtract the length of subarray
        // from the index in order to simulate infinite forest replication
        if(index > element.length - 1){
            index = index - element.length;
    }
    return counter
}); return counter
}
// Right 5, down 1.
function fiveRightOneDown (input){
    let counter = 0;
    let index = 0;
    input.forEach((element, i) => {
        // loop through array of arrays and access [x] element of each subarray
        // x - being a variable assigned 0 at first which is increased by 5 
        // each step of .forEach loop below

        // 3. add to the global counter each time the symbol is equals to "#"
        if(element[index] === "#") {
            counter++;
            // console.log(`Found a tree on line ${i}`)
        }       

        index = index + 5;
        // 4. check if index reaches the end of a subarray - subtract the length of subarray
        // from the index in order to simulate infinite forest replication
        if(index > element.length - 1){
            index = index - element.length;
    }
    return counter
}); return counter
}

// Right 7, down 1.
function sevenRightOneDown (input){
    let counter = 0;
    let index = 0;
    input.forEach((element, i) => {
        // loop through array of arrays and access [x] element of each subarray
        // x - being a variable assigned 0 at first which is increased by 5 
        // each step of .forEach loop below

        // 3. add to the global counter each time the symbol is equals to "#"
        if(element[index] === "#") {
            counter++;
            // console.log(`Found a tree on line ${i}`)
        }       

        index = index + 7;
        // 4. check if index reaches the end of a subarray - subtract the length of subarray
        // from the index in order to simulate infinite forest replication
        if(index > element.length - 1){
            index = index - element.length;
    }
    return counter
}); return counter
}

// Right 1, down 2.
function oneRighTwoDown (input){
    let counter = 0;
    let index = 0;
    let flipper = true;
    //this one is a bit trickier since we need to 'skip' every second line
    //in order to do so one solution might be to create a true/false switch
    //and flip it every loop, and use it to skip lines (elements of array)
    input.forEach((element, i) => {
        if (flipper === true){
            // loop through array of arrays and access [x] element of each subarray
            // x - being a variable assigned 0 at first which is increased by 5 
            // each step of .forEach loop below

            // 3. add to the global counter each time the symbol is equals to "#"
            if(element[index] === "#") {
                counter++;
                // console.log(`Found a tree on line ${i}`)
            }       

            index++;
            flipper = !flipper;
            // 4. check if index reaches the end of a subarray - subtract the length of subarray
            // from the index in order to simulate infinite forest replication
            if(index > element.length - 1){
                index = index - element.length;}
        } else {
            flipper = !flipper;//every second line skip and switch 'flipper'
            return
            }
    return counter
}); return counter
}
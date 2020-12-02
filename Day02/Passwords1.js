const fs = require('fs');

const filename = './2020passwords.txt';

fs.readFile(filename, 'utf8', function(err, data) {  
    if (err) throw err;

    const dataArr = data.split('\n');
    let counter = 0;

    dataArr.forEach(element => {
        const tornString = element.split(/[\s-:]+/); ///[.\*+-/_]/
        const lowestN = Number(tornString[0]);
        const heighestN = Number(tornString[1]);
        const char = tornString[2];
        const password = tornString[3];

        var re = new RegExp(char,"g");

        const charsInPass = (password.match(re) || []).length;
        
        // console.log(`${charsInPass} of ${char} found in ${password}, because re value is ${re}`);
        if (charsInPass >= lowestN && charsInPass <= heighestN){
            console.log('match!:', element)
            counter++
            console.log(counter)

        }
        // console.log(charsInPass, ' matches for the original string:', element, 'but the range is', lowestN, heighestN)
  
});
})
  

// 4-5 c: ccchc
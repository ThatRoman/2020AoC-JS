const fs = require('fs');

const filename = './2020passwords.txt';

fs.readFile(filename, 'utf8', function(err, data) {  
    if (err) throw err;

    const dataArr = data.split('\n');
    let counter = 0;

    dataArr.forEach(element => {
        const tornString = element.split(/[\s-:]+/); ///[.\*+-/_]/
        const index1 = Number(tornString[0]);
        const index2 = Number(tornString[1]);
        const char = tornString[2];
        const password = tornString[3];

        var re = new RegExp(char,"g");

        const charsInPass = (password.match(re) || []).length;
        
        // console.log(`${charsInPass} of ${char} found in ${password}, because re value is ${re}`);
        if (charsInPass >= index1 && charsInPass <= index2){
            console.log('match!:', element)
            counter++
            console.log(counter)

        }
        // console.log(charsInPass, ' matches for the original string:', element, 'but the range is', index1, index2)
  
});
})
  

// 4-5 c: ccchc
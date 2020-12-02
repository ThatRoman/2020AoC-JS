const fs = require('fs');

const filename = './2020passwords.txt';

fs.readFile(filename, 'utf8', function(err, data) {  
    if (err) throw err;

    const dataArr = data.split('\n');
    let counter = 0;

    dataArr.forEach(element => {
        const tornString = element.split(/[\s-:]+/);
        const index1 = Number(tornString[0])-1;
        const index2 = Number(tornString[1])-1;
        const char = tornString[2];
        const password = tornString[3];
        
        // console.log(`${password[index1]} & ${password[index2]} found at positions ${index1} and ${index2} in ${password} for the original string: ${element}`);
        if ((password[index1] === char && password[index2] != char) || (password[index1] != char && password[index2] === char)){
            console.log('match!:', element)
            counter++
            console.log(counter)

        }
  
});
})
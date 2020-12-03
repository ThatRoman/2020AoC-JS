const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, '2015d2input.txt');


fs.readFile(filename, 'utf8', function(err, data) {  
    if (err) throw err;

    const dataArr = data.split('\n');

    let answer = 0;


    dataArr.forEach((box, index) => {
        // if (index < 10) { //for debugging limit to first 10 lines
            box = box.split('x').map(Number).sort((function(a,b){return a-b}));
            const wrapRib = box[0]*2 + box[1]*2;
            const bowRib = box[0]*box[1]*box[2];
            // console.log('for the box: ', box, ' whole area equals to: ', area, ' and with smallest side added: ', areaTotal);
            answer = answer + wrapRib + bowRib;
        // }
    })
    console.log('the program has finished calculations.Total ribbon length is:', answer, 'feet')
});
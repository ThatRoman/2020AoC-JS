const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'day4inputPassports.txt');

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;

    const dataArr = [];
    // first we need to parse the data and split into JS array:
    data.split(/\n\n/g)                             //split by double new line character
    .map(v => dataArr.push(v.replace(/\n/g, ' ')    // cut out caret caracter within subObjects and
    .split(' ')))                                   // split by spaces
    console.log(typeof(dataArr),'and the value is', dataArr.slice(0,5))

    let numberOfValidPassports = 0;
    dataArr.forEach(subArr => {
        // now loop through subElements and check if required fields ('hgt:', 'byr:' etc) are present, then add to the counter
        // reset counter for each subElement. If after looping through a subElement, counter is > 7 >> we've got
        // a valid passport
        let counter = 0;
        subArr.forEach(passportDataString => {
            if (passportDataString.includes('hgt:') ||
            passportDataString.includes('byr:') ||
            passportDataString.includes('iyr:') ||
            passportDataString.includes('eyr:') ||
            passportDataString.includes('hcl:') ||
            passportDataString.includes('ecl:') ||
            passportDataString.includes('pid:')
            ){ 
                counter++; 
                console.log('For this string total counter is:', counter)}
            else { }
        })
        if (counter >= 7) {numberOfValidPassports++}
    })

    console.log(numberOfValidPassports)
    // const objectData = dataArr.map(subObj => subObj.map(string => string.split(':')))

    // console.log('data final', dataArr[0][0],'and', dataArr[1],'and', dataArr[9])
    
})
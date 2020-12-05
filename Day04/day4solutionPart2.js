const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'day4inputPassports.txt');

// check helpers:
// a) check if string +3 indexes after 'hgt:' is === 'cm' >> check if it's got 3 numbers >> convert to number 
// and asses value. OR if +2 indexes is === 'in' >> check if it's 2 numbers >> convert and assess value in range
function checkHgt(s) {
    try {
        if (s.slice(s.indexOf('hgt:')+7, s.indexOf('hgt:')+9) === 'cm'){
            const dumpster = Number(s.slice(s.indexOf('hgt:')+4, s.indexOf('hgt:')+7));
            console.log(`The string with 'hgt:' field is: ${dumpster}cm`);
            return  dumpster < 194 && dumpster > 149
            ? true : false
        } else if (s.slice(s.indexOf('hgt:')+6, s.indexOf('hgt:')+8) === 'in'){
            const dumpster = Number(s.slice(s.indexOf('hgt:')+4, s.indexOf('hgt:')+6));
            console.log(`The string with 'hgt:' field is: ${dumpster}in`);
            return  dumpster < 58 && dumpster > 150
            ? true : false
        }
        return false
    } catch(err){console.log(`Error hgt: ${err}`)}
}
// a) check if string directly after 'byr:' is matching Num reGex >> convert to number & check if it's in range
function checkByr(s) {
    try {
        console.log('trying to slice:', s.slice(s.indexOf('byr:')+4, s.indexOf('byr:')+8) == /[0-9]{4}/)
        if (Number(s.slice(s.indexOf('byr:')+4, s.indexOf('byr:')+8)) === /[0-9]{4}/){
            const dumpster = Number(s.slice(s.indexOf('byr:')+4, s.indexOf('byr:')+8));
            console.log(`The string with 'byr:' field is: ${dumpster}`);
            return  dumpster < 2003 && dumpster > 1920
            ? true : false
        } else 
        return false
    } catch(err){console.log(`Error byr: ${err}`)}
}

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
        // now loop through subElements and check if values after required fields('hgt:', 'byr:' etc) are valid, 
        // then add to the counter. By doing so we are also checking if required fields themselves exist
        // reset counter for each subElement. If after looping through a subElement, counter is > 7 >> we've got
        // a valid passport
        let counter = 0;                            // Part2 solution is much trickier... we need to check the value between
        subArr.forEach(passportDataString => {      // the fild itself ('hgt:' etc) and the end of line OR units (in, cm) is valid
            if (checkHgt(passportDataString) 
            || checkByr(passportDataString) ||
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

    console.log('total valid passports: ',numberOfValidPassports)
   
})
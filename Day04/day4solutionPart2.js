const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'day4inputPassports.txt');

// check helpers:
// a) check if string +3 indexes after 'hgt:' is === 'cm' >> check if it's got 3 numbers >> convert to number 
// and asses value. OR if +2 indexes is === 'in' >> check if it's 2 numbers >> convert and assess value in range
function checkHgt(s) {
    try {
        if (s.slice(s.indexOf('hgt:')+7) === 'cm'){
            const dumpster = Number(s.slice(s.indexOf('hgt:')+4, s.indexOf('hgt:')+7));
            // console.log(`The string with 'hgt:' field is: ${dumpster}cm`);
            return  dumpster < 194 && dumpster > 149
            ? true : false
        } else if (s.slice(s.indexOf('hgt:')+6) === 'in'){
            const dumpster = Number(s.slice(s.indexOf('hgt:')+4, s.indexOf('hgt:')+6));
            // console.log(`The string with 'hgt:' field is: ${dumpster}in`);
            return  dumpster < 77 && dumpster > 58
            ? true : false
        }
        return false
    } catch(err){console.log(`Error hgt: ${err}`)}
}
// b) check if string directly after 'byr:' is matching Num reGex >> convert to number & check if it's in range
function checkByr(s) {
    try {
        if (s.includes('byr:')){
            const dumpster = Number(s.slice(s.indexOf('byr:')+4));
            const reGex = /^[0-9]{4}$/;
            console.log('string includes byr:',s.includes('byr:'),
                'trying to match:', dumpster , reGex.test(dumpster)&& dumpster < 2003 && dumpster > 1919)

            return reGex.test(dumpster) && dumpster < 2003 && dumpster > 1919
            ? true : false
        } else 
        return false
    } catch(err){console.log(`Error byr: ${err}`)}
}
// c) check if string directly after 'iyr:' is matching Num reGex >> convert to number & check if it's in range
function checkIyr(s) {
    try {
        if (s.includes('iyr:')){
            const dumpster = Number(s.slice(s.indexOf('iyr:')+4));
            const reGex = /^[0-9]{4}$/;
            // console.log('string includes iyr:',s.includes('iyr:'),
            //     'trying to match:', dumpster , reGex.test(dumpster)&& dumpster < 2021 && dumpster > 2009)

            return reGex.test(dumpster) && dumpster < 2021 && dumpster > 2009
            ? true : false
        } else 
        return false
    } catch(err){console.log(`Error iyr: ${err}`)}
}
// d) check if string directly after 'eyr:' is matching Num reGex >> convert to number & check if it's in range
function checkEyr(s) {
    try {
        if (s.includes('eyr:')){
            const dumpster = Number(s.slice(s.indexOf('eyr:')+4));
            const reGex = /^[0-9]{4}$/;
            // console.log('string includes eyr:',s.includes('eyr:'),
            //     'trying to match:', dumpster , reGex.test(dumpster)&& dumpster < 2031 && dumpster > 2019)

            return reGex.test(dumpster) && dumpster < 2031 && dumpster > 2019
            ? true : false
        } else 
        return false
    } catch(err){console.log(`Error eyr: ${err}`)}
}
// e) check if string directly after 'hcl:' is matching  reGex.test() method
function checkHcl(s) {
    try {
        if (s.includes('hcl:')){
            const dumpster = s.split(":")[1];
            const reGex = /^#[0-9a-f]{6}$/;
            // console.log('string includes hcl:',s.includes('hcl:'),
            //     'trying to match:', dumpster , reGex.test(dumpster))

            return  reGex.test(dumpster)
            ? true : false
        } else 
        return false
    } catch(err){console.log(`Error hcl: ${err}`)}
}
// f) check if string directly after 'ecl:' is matching one of possible options
function checkEcl(s) {
    try {
        if (s.includes('ecl:')){
            const dumpster = s.split(":")[1];
            const options = ['amb','blu','brn','gry','grn','hzl','oth'];
            // console.log('string includes ecl:',s.includes('ecl:'),
            //     'trying to match:', dumpster , options.includes(dumpster))

            return  options.includes(dumpster)
            ? true : false
        } else 
        return false
    } catch(err){console.log(`Error ecl: ${err}`)}
}
// g) check if string directly after 'pid:' is matching  reGex.test() method
function checkPid(s) {
    try {
        if (s.includes('pid:')){
            const dumpster = s.split(":")[1];
            const reGex = /^[0-9]{9}$/;
            // console.log('string includes pid:',s.includes('pid:'),
            //     'trying to match:', dumpster , reGex.test(dumpster))

            return  reGex.test(dumpster)
            ? true : false
        } else 
        return false
    } catch(err){console.log(`Error pid: ${err}`)}
}

// Main
fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;

    const dataArr = [];
    // first we need to parse the data and split into JS array:
    data.split(/\n\n/g)                             //split by double new line character
    .map(v => dataArr.push(v.replace(/\n/g, ' ')    // cut out caret caracter within subObjects and
    .split(' ')))                                   // split by spaces
    // console.log(typeof(dataArr),'and the value is', dataArr.slice(0,5)) // debug cleaned array

    let numberOfValidPassports = 0;
    dataArr.forEach(subArr => {
        // now loop through subElements and check if values after required fields('hgt:', 'byr:' etc) are valid, 
        // then add to the counter. By doing so we are also checking if required fields themselves exist
        // reset counter for each subElement. If after looping through a subElement, counter is > 7 >> we've got
        // a valid passport
        let counter = 0;                            // Part2 solution is much trickier... we need to check the value between
        subArr.forEach(passportDataString => {      // the fild itself ('hgt:' etc) and the end of line OR units (in, cm) is valid
            if (checkHgt(passportDataString) ||
                checkByr(passportDataString) ||
                checkIyr(passportDataString) ||
                checkEyr(passportDataString) ||
                checkHcl(passportDataString) ||
                checkEcl(passportDataString) ||
                checkPid(passportDataString) 
            ){ 
                counter++; 
                // console.log('For this string total counter is:', counter)
            }
            else { }
        })
        if (counter >= 7) {numberOfValidPassports++}
    })

    console.log('total valid passports: ',numberOfValidPassports)
   
})
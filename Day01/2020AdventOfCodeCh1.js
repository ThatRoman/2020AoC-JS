const fs = require('fs');

const filename = './2020sum.txt';

fs.readFile(filename, 'utf8', function(err, data) {  
    console.time('func only')

    if (err) throw err;

    const dataArr = data.split('\n');

    
    const resuledComb = k_combinations(dataArr, 3)
    resuledComb.forEach(element => {
        if (Number(element[0])+Number(element[1])+Number(element[2]) === 2020) {
            console.log('final match is: ', element)
            console.log(`And the result of multiplication is: ${Number(element[0])*Number(element[1])*Number(element[2])}`)
        
    };
    }); 
        

  });

/**
 * Copyright 2012 Akseli Palén.
 * Created 2012-07-15.
 * Licensed under the MIT license.
 */
function k_combinations(set, k) {
    var i, j, combs, head, tailcombs;
    if (k > set.length || k <= 0) {
        return [];
    }
    if (k == set.length) {
        return [set];
    }
    if (k == 1) {
        combs = [];
        for (i = 0; i < set.length; i++) {
            combs.push([set[i]]);
        }
        return combs;
    }
    combs = [];
    for (i = 0; i < set.length - k + 1; i++) {
        head = set.slice(i, i+1);
        tailcombs = k_combinations(set.slice(i + 1), k - 1);
        for (j = 0; j < tailcombs.length; j++) {
            combs.push(head.concat(tailcombs[j]));
        }
    }
    return combs;
}
function combinations(set) {
    var k, i, combs, k_combs;
    combs = [];
    for (k = 1; k <= set.length; k++) {
        k_combs = k_combinations(set, k);
        for (i = 0; i < k_combs.length; i++) {
            combs.push(k_combs[i]);
        }
    }
    return combs;
}

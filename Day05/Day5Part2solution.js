const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, './Day5inputBinaryInstructions.txt');

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;

    // first we need to parse the data and split into JS array:
    const dataArr = data.split(/\n/g)                           //split by new line character
    
    let bookingList = {}; // create a JSON to push all found bookings 
    for (let i=0; i < 128; i++){
        bookingList[i] = new Array;
        };
    // console.log(typeof(bookingList[13]))
    // For each boarding pass (item in dataArr) we need to find row and seat numbers 
    // and multiply before pushing to an empty list
    listOfBp = [];
    dataArr.forEach(boardingPassRaw => {
        let [nRow, nSeat, rowAcc, seatAcc] = [ 63.5, 3.5, 64, 4 ];
        for (let i = 0; i < 7; i++) {
            rowAcc = rowAcc/2;
            if (boardingPassRaw[i] === 'F'){
                nRow = nRow - rowAcc;
                // console.log('splitting', nRow)
            } else {
                nRow = nRow + rowAcc;
                // console.log('adding', nRow)
            }
             }
            // Nseat loop
            for (let i = 7; i < 10; i++) {
                seatAcc = seatAcc/2;
                if (boardingPassRaw[i] === 'L'){
                    // console.log('subtracting ',seatAcc, 'from', nSeat)
                    nSeat = nSeat - seatAcc;
                } else {
                    // console.log('adding',seatAcc, 'to', nSeat)
                    nSeat = nSeat + seatAcc;
                }
        } 
    bookingList[nRow].push(nSeat); //during each loop add to our booking list every seat found
    // console.log(typeof(bookingList[nRow]))
    // console.log('For BoardPass:', boardingPassRaw, 'the row number is: ', nRow, 
    //             'the seat number is: ', nSeat);
    listOfBp.push((nRow*8)+nSeat)
    })
    // and finally return the highest from the list of multiplied
    console.log(Math.max(...listOfBp))

    // this will populate the list of the rows with only 7 seats taken. 
    // Then you have to multiply the row number by 8 and add the missing spot number
    for (let i=0; i < Object.keys(bookingList).length; i++) {
        if (bookingList[i].length === 7){
          console.log(bookingList[i], i)
    
        }
    }
})
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
      // Write your code here
    let min = []
    let max = []

    arr.sort((a,b)=> a - b)

    for (let i = 0; i < arr.length - 1; i++) {        
        max.push(arr[i]);        
    }

    for (let i = arr.length - 1; i >= arr.length - 4; i--) {
        min.push(arr[i]);
    }

    console.log(max.reduce((a,b)=> a + b )+" " +min.reduce((a,b)=> a + b ))
    
}




function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

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


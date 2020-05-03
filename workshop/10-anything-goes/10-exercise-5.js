// Q5
// Write a JavaScript program to find ALL the Armstrong
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number:
// 3 ** 3 + 7 ** 3 + 1 ** 3
// = 27   + 343    + 1
// = 371

let armstrongNumbers = [];

for (let i=0; i<=999; i++){
     let Num = i.toString().split('');
     let sum = 0;

  Num.forEach(function(item){
    sum+=Number(item)*Number(item)*Number(item);
  });   
  if (sum === i){
  armstrongNumbers.push(i);
}
}

console.log(armstrongNumbers);

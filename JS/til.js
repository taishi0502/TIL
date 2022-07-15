'use strict';

const scores = [10, 3, 9]
let sum = 0

scores.forEach(score => {
  sum += score;
});

const avg = sum / scores.length
// console.log(sum)
// console.log(avg)

console.log(Math.floor(avg)) //7
console.log(Math.ceil(avg)) //8
console.log(Math.round(avg)) //7
console.log(avg.toFixed(3)) //7.333
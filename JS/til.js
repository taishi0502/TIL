'use strict';

const scores = [80, 90, 40, 70]
scores.push(60, 50);
scores.shift();
// >>>90, 40, 70, 60, 50

for(let i = 0; i < scores.length; i++){
  console.log(`Scores${i}: ${scores[i]}`)
}

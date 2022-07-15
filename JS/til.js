'use strict';

const otherPoints = {
  r: 4,
  color: 'red'
}


const point = {
  x: 100, // プロパティ
  y: 180,
  ...otherPoints
};
const {x, r, ...others} = point;
console.log(x)
console.log(r)
console.log(others)

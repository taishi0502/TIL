'use strict';

const otherPoints = {
  r: 4,
  color: 'red'
}


const point = {
  x: 100, // プロパティ
  y: 180,
};
const keys = Object.keys(point)// すべてキーを配列で取得できる
keys.forEach( key => {
  console.log(`key: ${key} Value: ${point[key]}`)
})

const points = [
  {x: 30, y: 20 },
  {x: 10, y: 50 },
  {x: 40, y: 40 }
]
console.log(points[1].y)

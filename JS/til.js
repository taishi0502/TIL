'use strict';

// const point = [100, 180];
const point = {
  x: 100, // プロパティ
  y: 180
};
point.x = 120 //xを120にする

console.log(point.x)
console.log(point['y'])

point.z = 90; // 追加
delete point.y; // 消す

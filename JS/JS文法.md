# JavaScript文法　ざっと
React学習前にざっと
- 'use strict'
 エラー発見しやすくするからとりあえず書いとく

- 基本上から順に実行
- コメントアウト
```
/*コメント*/
```
- ''or"",\n,\t文字列について
```
console.log('hello');
console.log("hello");
console.log("it's me!");
console.log('it\'s me!');
console.log('hello\n wo\trld');
console.log('hello'+'world');
```
- 演算子確認
```
console.log(10 + 3); //13
console.log(10 - 3); //7
console.log(10 * 3); //30
console.log(10 / 3); //3.33333...
console.log(10 % 3); //1
console.log(10 ** 3); //10の3乗
console.log(2+ 10 * 3); //32
console.log((2 + 10) * 3); //36
```
- 定数
```
const price = 150;
console.log(price * 140);
console.log(price * 160);
```

- 変数
```
// 定数　const
// 変数　let

let price = 150;
console.log(price * 140);
console.log(price * 160);

price = 170;
console.log(price * 140);
console.log(price * 160);
```
- 変数を使った計算
```
let price = 500;
// price = price += 100;
price += 100;

price *= 2;

price += 1;
price ++;

price -= 1;
price --;

console.log(price);
//1200
```




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
- Javascript データの型
```
console.log(typeof 'hello');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
// til.js:3 string
// til.js:4 number
// til.js:5 boolean
// til.js:6 undefined
// til.js:7 object
```
- 数字からなる文字列
```
//文字列も数値と認識
console.log('5' * 3);
console.log('5' - 3);
//+の場合は文字列の連結認識
console.log('5' + 3);

console.log(parseInt('hello', 10));
//NaN
```
- 比較演算子を使う
```
const price = 1200;

console.log(price > 1000); //true
console.log(price < 1000); //false
console.log(price >= 1000); //true
console.log(price <= 1000); //false
console.log(price === 1000); //false
console.log(price !== 1000); //true


//false <-0, null, undefined, '' , false
//ture <- それ以外
console.log(Boolean(0));
console.log(Boolean('hello'));
```
- 条件分岐
```
const score = 70;
if (score >= 80){
  console.log('Great!!');
} else if (score >= 60){
  console.log('Good');
} else  { 
  console.log('OK....');
}
//波括弧の中ブロックって言います
```






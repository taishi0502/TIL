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
- 論理演算子基礎
```
const score = 60;
const name = 'kimura';

if (score >= 50 ){
  if (name === 'kimura'){
    console.log('Good job!');
  }
}
//↑入子になってて見づらいから論理演算子使おうね


//&&なおかつ（AND)
//||もしくは（OR)
// !〜ではない（NOT)

if (score >= 50 && name === 'kimura' ){
  console.log('Great');
}
```
- switch文
```
const signal ='green';
if (signal === 'red'){
  console.log('stop');
} else if (signal === 'yellow'){
  console.log('Caution!');
} else if (signal === 'blue'){
  console.log('Go');
}
//switch使った方が良いよね

switch(signal/*ここは比較したい値*/){
  case 'red':
    console.log('stop');
    break;
  case 'yellow':
    console.log('Caution');
    break;
  case 'blue':
  case 'green':
    console.log('Go');
    break;

    default/*どれにも当てはまらない場合のデフォルト値*/ : 
    console.log('Wrong signal');
    break;

}
```

- forを使ったループ処理
特定の処理を繰り返し実行するため
```
  // console.log('hello');
  // console.log('hello' + i);
  console.log(`hello ${i}`);
}
>>>hello1,hello2....
```

- whileを使ったループ
指定した条件を満たす間特定の処理を繰り返す
```
let hp = 100;

while (hp > 0 ){
  console.log(`${hp} HP left!`);
  hp -= 15;
}
>>>til.js:6 100 HP left!
til.js:6 85 HP left!
til.js:6 70 HP left!
til.js:6 55 HP left!
til.js:6 40 HP left!
til.js:6 25 HP left!
til.js:6 10 HP left!
```

- continue, breakを使う
continueスキップ
```

for (let i = 1; i <= 10; i ++){
  
    if (i % 3 === 0){
      continue//iが３の倍数の時にスキップする
    }
  
  console.log(i)
}
```

-関数で処理をまとめてみよう
```
function showAd(){
  //ここだけ修正で済む
}


console.log('Tom id great!!');
showAd();
console.log('Bob id great!!');
showAd();
console.log('Alisa id great!!');
showAd();
console.log('taishi id great!!');
```

- 引数について
```
function showAd(message = 'Ad'){//仮引数
  console.log('------')
  console.log(`---${message}---`)
  console.log('------')
}


console.log('Tom id great!!');
showAd('Header Ad');//実引数
console.log('Bob id great!!');
showAd();
console.log('Alisa id great!!');
showAd('Footer Ad');
console.log('taishi id great!!');
```

- returnで値を返す
３回のテストの合計点を計算する処理をよくする

```
function sum(a, b, c){
  return a + b + c;
};

sum (1,2,3)
sum (3,4,5)

const total = sum (1,2,3) + sum(3,4,5);
console.log(total);
```

- 関数式を使う
```
const sum = function(a,b,c){
  return a + b + c;
};

const total = sum(1,2,3) + sum(3,4,5);
console.log(total)
```
- アロー関数
```
const sum = (a,b,c) =>  a + b + c;

const total = sum(1,2,3) + sum(3,4,5);
console.log(total)
```
```
//引数が一つだと、丸括弧省略できる

const double = a => a * 2;
console.log(double(12));
```

- スコープについて
定数や変数がブロック内で宣言された場合、その定数や変数はそのブロックの中だけで有効というスコープがある
```
function f(){
  const x =1 
  console.log(x)
}
f()
```

- コードをブロックで囲う
scriptタグを.htmlで分けて書いても、スコープは分かれない
ブロックで囲っておくと良い
















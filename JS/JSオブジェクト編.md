# 配列
```
{
  // const score1 = 80
  // const score2 = 90
  // const score3 = 40

  const scores = [80, 90, 40];
  console.log(scores)
}
```

- 配列要素にアクセス
```
  const scores = [80, 90, 40];
  console.log(scores[1])
```
```
//値の変更
  const scores = [80, 90, 40];
  scores[2] = 44;
  console.log(scores)
```
```
// 配列の要素数を取得
  const scores = [80, 90, 40];
  console.log(scores.length)
```

- 配列のループ処理を組み合わせる
```
  const scores = [80, 90, 40];
  // console.log(`score: ${scores[0]}`)
  // console.log(`score: ${scores[1]}`)
  // console.log(`score: ${scores[2]}`)

  for (let i = 0; i < scores.length; i++){
    console.log(`score${i} ${scores[i]}`)
  }
  ```

- 配列の要素を変更
```
const scores = [80, 90, 40, 70]
scores.push(60, 50); // push配列の末に追加
scores.shift(); // shift配列の先頭を削除
// >>>90, 40, 70, 60, 50

for(let i = 0; i < scores.length; i++){
  console.log(`Scores${i}: ${scores[i]}`)
}
```

- splice()途中の要素を変更
```
a.splice(変化する位置、削除する数、追加する数)
```
```
const scores = [80, 90, 40, 70]
scores.splice(1, 1, 40, 50);

for(let i = 0; i < scores.length; i++){
  console.log(`Scores${i}: ${scores[i]}`)
}
```

- スプレッド構文
配列の中に別の配列を展開
```
const otherscores = [80, 90, 40, 70]

const scores = [100,...otherscores] // 『...がスプレッド構文』別の配列を展開
console.log(scores)
```
```
関数の中でも
const otherscores = [80, 90]

const scores = [100,...otherscores] // 『...がスプレッド構文』別の配列を展開

function sum (a,b){
  console.log(a+b);
}
sum(...otherscores)
```
- 分割代入
```
const scores = [80, 90, 40, 70]

const [a, b, c, d] =scores;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
```
```
定数に入れたいのは最初の２つだけであとの二つは配列のままでよかった場合
const [a, b, ...others] = scores　// この...はレスト構文
console.log(a)
console.log(b)
console.log(others)
```
```
値を交換
let x = 30;
let y = 70;
[x, y] = [y, x];
console.log(x)
console.log(y)
// >>>x=70, y=30
```
- forEach()について
```
const scores = [80, 90, 40, 70]

scores.forEach((score, index) => {
  console.log(`score: ${index}:${score}`)
});
```

- map()について
配列の各要素に何らかの処理をして別の配列を作りたい場合の時などに使う
```
２０円ずつ値上げした結果を配列で欲しかった場合
// const updatePrices = prices.map((price) => {
//   return price + 20;
// });
//短くかく
const updatePrices = prices.map( price => price + 20);
console.log(updatePrices)

```
- filter()を使う
配列の要素をチェックして条件に合うものだけを抽出して別の配列として取得することができるfilter()
```
const numbers = [1, 4, 7, 8, 10];

// const evenNumbers = numbers.filter(number => {
//     if (number % 2 === 0){
//       return true
//     } else {
//       return false
//     }
// });
//短くかく
const evenNumbers = numbers.filter(number =>  number % 2 === 0);
console.log(evenNumbers)
```

- オブジェクトを作る
```
// const point = [100, 180];
const point = {
  x: 100, // プロパティ
  y: 180
};
console.log(point)
```
-オブジェクトのプロパティにアクセス
```
const point = {
  x: 100, // プロパティ
  y: 180
};
point.x = 120 //xを120にする

console.log(point.x)
console.log(point['y'])

point.z = 90; // 追加
delete point.y; // 消す

```

- オブジェクトの操作
```
分割代入、レスト構文、スプレッド構文もオブジェクトに使える
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
```
- Object.keys()を使う
```
const point = {
  x: 100, // プロパティ
  y: 180,
};
const keys = Object.keys(point)// すべてキーを配列で取得できる
keys.forEach( key => {
  console.log(`key: ${key} Value: ${point[key]}`)
})
```
```
配列やオブジェクトを自由に組み合わせて複雑なデータ構造を作ることもできる
const points = [
  {x: 30, y: 20 },
  {x: 10, y: 50 },
  {x: 40, y: 40 }
]
console.log(points[1].y)
```
- 変数を代入してみる
```
let x = 1;
let y = x;
x = 5;
console.log(x) //5
console.log(y) //1
```
```
変数の挙動
let x = [1, 2];
let y = x; // <<< yはxの値がどこに格納されているか
x[0] = 5;
console.log(x) //[5, 2]
console.log(y) //[5, 2]  <<<[1, 2]ではない
```
- 配列の要素を文字列としrて結合する
```
const d = [2019, 11, 14]
console.log(d.join('/'))
// >>> 2019/11/4

const t = '17:08:24'
console.log(t.split(':'))
// >>> ['17', '08', '24']g
```

- 数値を操作
```
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
```

- 日時
```

const d = new Date()
console.log(d)

console.log(`${d.getMonth() + 1}月${d.getDate()}日`)
```
- alertとconfirm
```
alert('hello')
const answer = confirm('削除しますか')
if(answer){
  console.log('削除しました')
   
} else {
  console.log('キャンセルしました。')
}
```
- setInterval()
```
let i = 0;

function showTime(){
  console.log(new Date());
  i++
  if (i > 2){
    clearInterval(intervalId)
  }
}

const intervalId = setInterval(showTime, 1000);
```

- 例外処理
```
const name = 5;

try {
  console.log(name.toUpperCase())
} catch (e){
  console.log(e);
}

console.log('finish')
```

# クラス

```
const posts = [
  {
    text: 'Javascriptの勉強中',
    likeCount: 0
  },
  {
    text: 'プログラミング楽しい',
    likeCount: 2
  }
]

  function show(post){
    console.log(`${post.text} - ${post.likeCount}いいね`)
  }

  show(posts[0])
```
- クラスを作る
```
class Post {
  
    constructor(text){
    this.text = text;
    this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}いいね`)
    }
  }

 const posts = [
   new Post('JavaScriptの勉強中'),
   new Post('プログラミング楽しい')
 ];


posts[0].show();
posts[1].show();
```
 





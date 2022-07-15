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


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

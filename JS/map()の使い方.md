# mapの構文について

```
var array = [ 配列データ ];
 
array.map( コールバック関数 );
```
- 「map」は配列データに使うメソッドであり、各要素1つずつに対して「コールバック関数」を実行し、その結果を新しい配列として返すことが出来るようになっています。つまり、この関数内に実行したい処理を書いておくことで、配列の各要素に対して好きな操作をすることが出来る

# 配列を繰り返し処理する例
```
var items = [1,2,3,4,5];
var result = items.map(function(value){
  //配列の要素を２倍にする
  　return value * 2;
})

console.log(result);
>>>[2,4,6,8,10]
```
# forEachとの違い
- 返り値があるか否か（forEachはない）
- forEachは単純に実行するだけのメソッドに対して、mapは実行の結果を配列データとして返してくれる。
```
//forEachの場合
var result = [1,2,3].forEach(function(value){
  return value * 2;
});

console.log(result);
>>> undefined
```
```
//mapの場合
var result = [1,2,3].map(function(value){
  return value * 2;
});

console.log(result);
>>> [2,4,6]
```
# mapのコールバック関数
- ３つの引数を取得することができる
```
配列データ.map(function(value, index, array){
})
```
- valueは配列の値
- indexは配列のインデックス番号
- arrayは現在処理している配列

上記の例として、以下サンプル、引数のindexを使って、偶数のindex番号の時だけ値を２倍にしています。
```
var items = [1,2,3,4,5,6,7,8,9]
var result = items.map(function(value, index, array){
  //index番号が偶数の時だけ２倍にする
  if (index % 2 !== 0){
    return value * 2;
  }
  else {
    return vaule;
  }
});
console.log(result);

>>>[1,4,3,8,5,12,7,16,9]
```

# 第二引数にオブジェクト 
これまではmapの第一引数にコールバック関数を指定していましたが、第二引数に任意のオブジェクトを指定することも可能です。
```
var array = [配列データ]
//第二引数にオブジェクトを指定
array.map(コールバック関数, オブジェクト);
```
以下で食べ物を簡単なオブジェクトにしたfoodlistをmapの第二引数に指定した例です。
```
var foodList = {
  'オムライス': 450,
  '焼きそば': 500,
  'お好み焼き': 600,
  '焼き飯': 400
};
 
配列.map( function( value ) {
 
    //「this」がオブジェクトを参照する
 
}, foodList );  //第2引数にオブジェクトを指定
```
- このように、第2引数へ「foodList」と記述することで、コールバック関数内の「this」が「foodList」を参照できるようになるわけです。this
```
var foodList = {
  'オムライス': 450,
  '焼きそば': 500,
  'お好み焼き': 600,
  '焼き飯': 400
};
 
//任意のキーワードを指定する
var order = ['焼き飯', 'お好み焼き'];
 
var result = order.map( function( value, index, array ) {
 
//配列のキーワードを使ってオブジェクト内の値を取得する
//『map』の第二引数『foodList』から取得できるthis
    return this[value];
 
}, foodList );
 
console.log( result );

>>>[400, 600]
```
このサンプルでは配列orderでキーワードを設定し、そこからオブジェクトに登録されているキーワードと一致した価格を取得して配列として返している。


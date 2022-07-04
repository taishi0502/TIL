# JavaScript復習、実装の一例
- JS各フレームワーク学習前にざっと復習
- 要素を取得(id="trigger")
```
document.getElementById('trigger')
```

- 何かイベント起きたら、何らかの処理してね（今回はクリックイベント, 処理プロセス）
```
document.getElementById('trigger').addEventListener('click', process);
```
- 処理（関数）定義(p要素id="target")
```
function process() {
  document.getElementById('target')
 }
```

- targetidを取得し、テキストを変更するとか
```
function process() {
  document.getElementById('target').textContent = 'テキスト変えます。';
      
}
 ```
 - css 適用
 ```
       document.getElementById('trigger').classList.add('changed');
    }
 ```
 



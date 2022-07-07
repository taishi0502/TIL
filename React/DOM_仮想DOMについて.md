# 仮想DOMについて（ Document Object Model ）
- そもそもDOMとは
HTMLやXMLのような文書をプログラムを通して直接変更できるインターフェイスのこと

# レンダリングの仕組み
- （HTMLの解析→レンダリングツリーの構築→レイアウト処理→描画）
- HTMLの解析
```
HTMLの読み込みの場合、解析したものをDOMツリーへと構築していきます。
変換は以下の工程で進められており、画像やCSSなどの取得や読み込みも行います。
字句解析によるトークンのリスト化
構文解析による構文木構築
構文木内にあるJavascriptを実行し、DOMツリーを構築
読み込まれたCSSは、レンダリングエンジンによって解析され、CSSOMツリーへと変換されます]
```

- レンダリングツリーの構築
ドキュメントを解析してDOMツリーとCSSOMツリーへと構築しを、組み合わせていく、それでレンダリングツリーを構築
<img width="629" alt="スクリーンショット 2022-07-07 9 22 28" src="https://user-images.githubusercontent.com/103736298/177663679-872bf108-0f3a-4dfc-a11a-51d8cbc3f359.png">

レンダリングツリーは正しい順序で描画できるように管理され、表示されるコンテンツの構造を示す。レンダリングツリーが構築されたら、レイアウト処理に進みます。

- レイアウト処理
　レイアウト処理では、構築したレンダリングツリーをもとに実際の位置とサイズの情報を加えていく。
 
- 描画
表示されるノードとスタイル、レイアウト等がわかったので、これらの情報をもとに画面上に実際に描画していきます。この段階で、実際のピクセルに変換されます

〜このように、画面に実際に表示されるまでにURLから要求されたHTMLなどを解析してそれぞれのツリーへと構築します。構築されたツリーに実際に表示するサイズや位置情報を付加し描画してい来ます。
**これらのレンダリング処理はユーザーからアクション実行処理によってDOMイベントが発火する際に、都度再レンダリング処理が発生します。なので、ブラウザにとってコストの高い処理になります。
仮想DOMは、無駄なレンダリング処理を減らして、レンダリングコストを小さくします。**

# 仮想DOMとは?
DOMをJavascriptのオブジェクトとして表現しているものです。**DOMそのものを操作するのではなく、オブジェクトを変更して差分のみをDOMに反映することで、パフォーマンスを向上させます。**
```
1,仮想DOMツリーを2種類用意(変更前後の2種類)
2,データの変更を検知
3,仮想DOMを再構築
4,変更前後の仮想DOMツリーを用いて差分検知する
5,差分があった箇所だけDOMに反映する
```
- 仮想DOM使うとレンダリングコストを低くできることの他に、
UIとロジックの分離
状態の管理の簡略化
UIとロジックを繋ぐ処理が容易
のメリットもある。


# DOMを直接操作する場合
```
<div id="app">
  <p id="counter">0</p>
  <button type="button" id="increment">+1</button>    
</div>

<script>
const state = { count: 0 };
const btn = document.getElementById('increment');
btn.addEventListener('click', () => {
  const counter = document.getElementById('counter');
  counter.innerText = ++state.count;
})
</script>
```
> 上記のコードは、以下のような処理になっています。

> stateというオブジェクトで現在のcount数を管理(初期値0)
> buttonタグをidで要素取得('increment')
> ボタンがクリックされたとき、idが'counter'の要素を取得
> 取得した要素の文字をstate.countでインクリメント、更新する
> この場合、UIとロジックが混在していたり、状態管理等がめんどくさい印象になっています。


# 仮想DOM（React）の場合
- Counter.jsx
```
export const Counter = () => {
  const [count, {increment}] = useCounter();
  return (
    <div>
      <p id="counter">{count}</p>
      <button onClick={increment}>+1</button>
    </div>
  )
}
```
- useCounter.js
```
export const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter+1);
  }
  return [counter, {increment}]
}
```
> 上記のコードではUIを担当する部分とロジックを担当する部分で分離しています。
> このようにロジックとUIを分離することで、ロジックの使い回しが可能であったり、最終的な
> ビューの状態が分かりやすかったりするので、状態管理しやすくなります。

# まとめ
仮想DOMは従来のDOMと比較して、レンダリングコストを低減しやすく、且つ、開発する上でもUIとロジックの分離がしやすいものだとわかります。




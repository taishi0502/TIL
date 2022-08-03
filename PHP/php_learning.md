# PHP基礎文法

### 出力
```
<?php 
echo 'hello kimura' . PHP_EOL; //(PHP_EOL適切に改行)
echo 'hi takahashi'; . PHP_EOL;
>>>php main.php
hello kimura
hi takahashi
```
### コメント
```
// comment
# comment
/* comment */
```
### 変数
```
<?php
$name = 'taishi';
echo 'Hi '. $name;
>>>Hi taishi~ 
```
### 文字列の扱い
```
<?php
$name = 'taishi';
echo "It's \"Sunday\".\t Hello $name" .
>>>It's "Sunday".  Hello taishi
```
### ヒアドキュメント
```
<?php
  $text = <<<'ETO' //nowdoc

  $name = 'kimura'
  $text = <<<"EOT" // (or下,heredoc変数を展開したい場合)
  $text = <<<EOT（改行や字下げを保持したまま）
  Hello! $name
    this is looooong
  text!
  EOT;
echo $text;
>>> 
Hello!
  this is looooong
text!
```
### 数値の計算
```
<?php
echo 10 + 3 .PHP_EOL;
echo 10 - 3 .PHP_EOL;
echo 10 * 3 .PHP_EOL;
echo 10 / 3 .PHP_EOL; >>> 3.33333...

echo 10 % 3 .PHP_EOL; >>> 1
echo 10** 3 .PHP_EOL; >>> 1000

echo 2 + 10 * 3 .PHP_EOL; >>> 32
echo (2 + 10) * 3 .PHP_EOL; >>> 36
echo 2 + '3' .PHP_EOL; >>> 5 //数値っぽい文字列もなるべく数値に変換しようとする
```


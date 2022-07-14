# 入力
```
n = gets.to_s.to_i  # 整数1つを受け取る(1行に1つ整数がある前提)
s = gets.to_s.chomp # 1行を文字列として受け取る(chompで最後の改行を切り落としている)
a = gets.to_s.split.map{ |e| e.to_i } # 横1行のスペース区切りの整数を配列として受け取る
a = Array.new(n){ gets.to_s.to_i } # n行1列の改行区切りの整数を配列として受け取る
m = Array.new(n){ gets.to_s.split.map{ |e| e.to_i } } # n行m列の整数を2次元配列で受け取る
```

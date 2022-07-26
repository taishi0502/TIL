# Docker

* 概要
- 軽量な仮想化環境
- Build once, run anywhere

* 使うと何が良いのか
- 複数人で開発していく中で、プログラムの実行環境を共有する。
　コードはGithubなどで管理。プログラムの実行環境は、人によって、各々MacOS,Windowsや、入れているソフトなど色々あるから実行環境の共有は容易ではない。
　そこで、フラットな仮想化マシンを作成し、その仮想マシンの設定などを共有することで、実行環境を共有する。しかし、従来のホスト型仮想化では動作が重いから、Dockerのコンテナ型仮想化によって、軽量な動作と環境ファイル共有を実現する。　

* 公式サイト

* 知識
- Unix
- Vim
- Vagrant

* 環境
- Ubuntu

* Docker Engine
- Dockerを利用するための常駐プログラム
- Docker for mac、Docker for Windows、Docker ToolboxなどのソフトウェアをPCにInstallすることで、常駐プログラムとしてDocker Engineが動作し、Dockerを利用することができるようになる。

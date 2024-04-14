# *How to* Create a **Website** by [GitHub Pages](https://pages.github.com/)

**[はじめに](https://docs.github.com/ja/get-started/quickstart/hello-world)**

* *username*.github.io という名前の [新しいパブリック リポジトリ](https://github.com/new) を作成
* [GitHub デスクトップをダウンロード](https://desktop.github.com/) し、リポジトリのクローンを作成
* インデックスファイルを作成し、コミットして公開する
* **完了**

***

## [Jekyll](https://jekyllrb-ja.github.io/) • シンプルで、ブログのような、静的サイト
* Ruby開発環境をインストール(バージョン確認)
* GCCとMakeをインストール(バージョン確認)
* Jekyllとbundler gemsをインストール

```
sudo apt-get install ruby -y
ruby -v
gem -v

sudo apt-get install make gcc
gcc -v
make -v

export GEM_HOME="$HOME/.gem"
gem install bundler
gem install jekyll bundler
```

新しいJekyllサイトを作成
```
jekyll new サイト名
cd myblog
bundle exec jekyll serve
```

### Jekyllのコマンド
* jekyll -v :ローカルにインストールされているJekyllのバージョンを確認する
* jekyll new　サイト名 :Jekyllでサイトを作成する
* jekyll build ：_siteディレクトリに静的なサイトを生成する
* jekyll clean :_siteディレクトリを削除する
* jekyll serve ：サイトを構築し、ローカルマシンでウェブサーバーを起動する
* ctrl + c :サイトを閉じる (close)
* jekyll help：Jekyllのヘルプドキュメントを出力する


[GitHub PagesとJekyllについて](https://docs.github.com/ja/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)

___
[ChromeBook で VisualStudioCode を使う](https://zenn.dev/gatabutsu/articles/82008b901c4f04)
[ChromeOSでGit, VSCode, Dockerをインストールして開発 #Docker - Qiita](https://qiita.com/pyama2000/items/90b189964f71def53b19)
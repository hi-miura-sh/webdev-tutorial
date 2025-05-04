# Web開発基礎学習サイト

## はじめに

このサイトは、Web開発の基礎を学ぶための学習サイトです。
「Webサイトってどうやって作るの？」という疑問から始まり、段階的に学習を進めていきます。

## 学習の流れ

### 1. Webサイトの仕組みを理解する
- Webサイトはどのように表示されるの？
- サーバーとクライアントの関係
- URLの意味と構造
- ブラウザの役割

### 2. 開発環境の準備
- テキストエディタのインストール（Visual Studio Code）
- ブラウザの開発者ツールの使い方
- ファイルの保存と管理の基本

### 3. HTMLの基礎（Webページの構造）
- HTMLとは何か
- 基本的なHTMLの書き方
- よく使うHTMLタグ
  - 見出し（h1, h2, h3...）
  - 段落（p）
  - リスト（ul, ol, li）
  - リンク（a）
  - 画像（img）
- フォームの作り方
- セマンティックHTML

### 4. CSSの基礎（デザインとレイアウト）
- CSSとは何か
- CSSの基本的な書き方
- セレクタの種類と使い方
- 色の指定方法
- フォントの設定
- ボックスモデル
- レイアウトの基本
  - Flexbox
  - Grid
- レスポンシブデザイン

### 5. JavaScriptの基礎（動きと機能）
- JavaScriptとは何か
- JavaScriptの基本的な書き方
- 変数とデータ型
- 条件分岐（if文）
- 繰り返し（for文）
- 関数の作り方
- DOM操作
- イベント処理
- 簡単なアニメーション

### 6. Webサーバーの基礎（Apache2）
- Webサーバーとは何か
- Apache2のインストール
- 基本的な設定
- ファイルの配置
- セキュリティの基本

## 学習の進め方

1. 各セクションの「基本」ページから始めましょう
2. サンプルコードを実際に試してみましょう
3. 練習問題に挑戦しましょう
4. 分からないことは、エラーメッセージを確認しましょう

## 開発環境のセットアップ

### 1. テキストエディタのインストール
Visual Studio Codeをインストールします：
1. [Visual Studio Codeの公式サイト](https://code.visualstudio.com/)にアクセス
2. ダウンロードボタンをクリック
3. インストーラーを実行

### 2. ブラウザの開発者ツールの使い方
1. ブラウザで右クリック → 「検証」を選択
2. 開発者ツールが表示されます
3. ElementsタブでHTMLの確認
4. ConsoleタブでJavaScriptの実行
5. Networkタブで通信の確認

### 3. ローカル環境での実行方法
1. ファイルを保存する
2. ブラウザでファイルを開く
3. 変更を確認する

## よくある質問

### Q: エラーが発生したらどうすればいいですか？
A: エラーメッセージを確認し、以下の点を確認しましょう：
- ファイル名は正しいですか？
- コードの書き方は合っていますか？
- 必要なファイルはすべてありますか？

### Q: コードを書くときの注意点は？
A: 以下の点に注意しましょう：
- インデント（字下げ）を適切に行う
- セミコロン（;）を忘れない
- コメントを適切に書く
- ファイル名は小文字で、スペースは使わない

## 参考資料

- [MDN Web Docs](https://developer.mozilla.org/ja/)
- [W3Schools](https://www.w3schools.com/)
- [HTML Living Standard](https://html.spec.whatwg.org/)

## ライセンス

MIT License 

## web-learningディレクトリのindex.htmlを公開する方法

みなさん、/var/www/html/index.html（デフォルトのトップページ）を公開する方法はご存じですね。

今回は、自分で作成した「web-learning」ディレクトリ内のindex.htmlをWebブラウザから見られるようにする方法を説明します。

### 1. ディレクトリの配置

まず、web-learningディレクトリが/var/www/html/の中にあることを確認しましょう。

```
/var/www/html/web-learning/index.html
```

### 2. アクセス方法

Webブラウザで、以下のURLにアクセスします。

```
http://<サーバーのIPアドレスまたはドメイン>/web-learning/
```

例：
```
http://localhost/web-learning/
```

このURLにアクセスすると、web-learningディレクトリ内のindex.htmlが表示されます。

### 3. よくある間違い

- URLの最後に「/」を忘れると、index.htmlが表示されない場合があります。
- ディレクトリやファイルのパーミッション（権限）が正しく設定されていないと、ページが表示されません。
    - 必要に応じて、以下のコマンドで権限を確認・修正しましょう。
    ```bash
    sudo chown -R www-data:www-data /var/www/html/web-learning
    sudo chmod -R 755 /var/www/html/web-learning
    ```
- Apacheの設定で「Indexes」や「AllowOverride」などが有効になっているか確認しましょう。

### 4. まとめ

- /var/www/html/web-learning/ にindex.htmlを置く
- ブラウザで http://<サーバーアドレス>/web-learning/ にアクセス
- 権限や設定に注意

困ったときは、エラーメッセージやApacheのエラーログ（/var/log/apache2/error.log）を確認しましょう。

--- 
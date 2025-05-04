# Web開発基礎学習サイト

このプロジェクトは、Apache2、HTML、CSS、JavaScriptの基礎を学ぶための学習サイトです。

## プロジェクト構成

```
web-learning/
├── README.md
├── .htaccess
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── normalize.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── pages/
│   ├── apache/
│   │   ├── index.html
│   │   ├── basic.html
│   │   └── configuration.html
│   ├── html/
│   │   ├── index.html
│   │   ├── basic.html
│   │   └── elements.html
│   ├── css/
│   │   ├── index.html
│   │   ├── basic.html
│   │   └── layout.html
│   └── javascript/
│       ├── index.html
│       ├── basic.html
│       └── dom.html
└── examples/
    ├── apache/
    ├── html/
    ├── css/
    └── javascript/
```

## セットアップ手順

1. Apache2のインストール
```bash
sudo apt update
sudo apt install apache2
```

2. プロジェクトの配置
```bash
sudo cp -r web-learning /var/www/html/
sudo chown -R www-data:www-data /var/www/html/web-learning
```

3. Apache2の設定
```bash
sudo nano /etc/apache2/sites-available/000-default.conf
```

以下の設定を追加：
```apache
<Directory /var/www/html/web-learning>
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
```

4. Apache2の再起動
```bash
sudo systemctl restart apache2
```

## サイト構成

### 1. Apache2セクション
- Apache2の基本概念
- インストール方法
- 設定ファイルの説明
- 基本的な設定方法
- セキュリティ設定

### 2. HTMLセクション
- HTMLの基本構造
- 主要なHTMLタグ
- セマンティックHTML
- フォーム要素
- アクセシビリティ

### 3. CSSセクション
- CSSの基本構文
- セレクタ
- ボックスモデル
- レイアウト（Flexbox, Grid）
- レスポンシブデザイン

### 4. JavaScriptセクション
- JavaScriptの基本構文
- DOM操作
- イベント処理
- 非同期処理
- モダンJavaScript

## 開発ガイドライン

1. コードの品質
- インデントは4スペース
- セミコロンは必須
- コメントは日本語で記述

2. ファイル命名規則
- すべて小文字
- 単語間はハイフン（-）で区切る
- 拡張子は小文字

3. ブランチ戦略
- main: 本番環境用
- develop: 開発用
- feature/*: 機能開発用

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
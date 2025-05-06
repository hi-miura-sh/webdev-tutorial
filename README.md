# 自己紹介サイト作成チュートリアル

## はじめに

このチュートリアルでは、HTML、CSS、JavaScriptを使って、あなただけの自己紹介サイトを作成します。
実際に手を動かしながら、Web開発の基礎を学んでいきましょう。

## 準備

### 1. 開発環境の準備

まず、Apache2をインストールします。Apache2はWebサーバーソフトウェアで、Webページを表示するために必要です：

1. ターミナルを開いて、以下のコマンドを実行します：
```bash
sudo apt update
sudo apt install apache2
```

2. インストールが完了したら、Apache2を起動します：
```bash
sudo service apache2 start
```

3. プライベートIPアドレスを確認します：
```bash
ip addr show
```
このコマンドを実行すると、以下のような情報が表示されます：
```
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:15:5d:01:ca:05 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.100/24 brd 192.168.1.255 scope global dynamic eth0
       valid_lft 86397sec preferred_lft 86397sec
    inet6 fe80::215:5dff:fe01:ca05/64 scope link
       valid_lft forever preferred_lft 86397sec
```
この例では、`192.168.1.100`がプライベートIPアドレスです。

4. インストールと起動が成功したか確認するには、ブラウザで以下のURLにアクセスしてみましょう：
- 同じPCから：`http://localhost` または `http://127.0.0.1`
- 同じネットワーク内の他のデバイスから：`http://192.168.1.100`（あなたのプライベートIPアドレス）

「Apache2 Ubuntu Default Page」というページが表示されれば成功です。

### 2. 自己紹介サイトの基本構造を作ろう

1. `/var/www/html` ディレクトリに移動します：
```bash
cd /var/www/html
```

2. 以下の内容を `index.html` として保存します：
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>私の自己紹介</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>私の自己紹介</h1>
    <nav>
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#hobby">趣味</a></li>
        <li><a href="#skills">スキル</a></li>
        <li><a href="#contact">お問い合わせ</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>About Me</h2>
      <img src="profile.jpg" alt="プロフィール画像" class="profile-image">
      <p>はじめまして！私は[あなたの名前]です。</p>
      <p>[簡単な自己紹介文をここに書きます]</p>
    </section>

    <section id="hobby">
      <h2>趣味</h2>
      <ul>
        <li>趣味1</li>
        <li>趣味2</li>
        <li>趣味3</li>
      </ul>
    </section>

    <section id="skills">
      <h2>スキル</h2>
      <ul>
        <li>スキル1</li>
        <li>スキル2</li>
        <li>スキル3</li>
      </ul>
    </section>

    <section id="contact">
      <h2>お問い合わせ</h2>
      <form id="contact-form">
        <div>
          <label for="name">お名前：</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div>
          <label for="email">メールアドレス：</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div>
          <label for="message">メッセージ：</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">送信</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2024 [あなたの名前]. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

このHTMLファイルをブラウザで開くと、非常にシンプルな見た目になります。
テキストは左揃えで、余白も適切に設定されておらず、見た目が整っていません。
これをCSSで整えていきましょう。

### 3. スタイルを追加しよう

CSS（Cascading Style Sheets）は、Webページのデザインを定義するための言語です。
HTMLで作った要素の見た目（色、大きさ、配置など）を指定できます。

1. 同じディレクトリに `style.css` を作成：
```css
/* 全体のスタイル */
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;  /* フォントの種類 */
  line-height: 1.6;                                  /* 行の高さ */
  margin: 0;                                         /* 外側の余白を0に */
  padding: 0;                                        /* 内側の余白を0に */
  color: #333;                                       /* 文字色を濃いグレーに */
}

/* ヘッダーのスタイル */
header {
  background: #2c3e50;                               /* 背景色を濃い青に */
  color: white;                                      /* 文字色を白に */
  padding: 1rem;                                     /* 内側の余白を設定 */
  text-align: center;                                /* テキストを中央揃えに */
}

nav ul {
  list-style: none;                                  /* リストのマークを消す */
  padding: 0;                                        /* 内側の余白を0に */
  display: flex;                                     /* フレックスボックスを使用 */
  justify-content: center;                           /* 要素を中央に配置 */
  gap: 2rem;                                         /* 要素間の間隔を設定 */
}

nav a {
  color: white;                                      /* リンクの色を白に */
  text-decoration: none;                             /* 下線を消す */
}

nav a:hover {
  color: #3498db;                                    /* マウスを乗せた時の色を青に */
}

/* メインコンテンツのスタイル */
main {
  max-width: 800px;                                  /* 最大幅を設定 */
  margin: 0 auto;                                    /* 左右の余白を自動で調整（中央揃え） */
  padding: 2rem;                                     /* 内側の余白を設定 */
}

section {
  margin-bottom: 3rem;                               /* 下の余白を設定 */
}

/* プロフィール画像 */
.profile-image {
  width: 200px;                                      /* 幅を設定 */
  height: 200px;                                     /* 高さを設定 */
  border-radius: 50%;                                /* 円形に */
  object-fit: cover;                                 /* 画像のアスペクト比を保持 */
  margin: 1rem 0;                                    /* 上下の余白を設定 */
}

/* フォームのスタイル */
form div {
  margin-bottom: 1rem;                               /* 下の余白を設定 */
}

label {
  display: block;                                    /* ブロック要素として表示 */
  margin-bottom: 0.5rem;                             /* 下の余白を設定 */
}

input, textarea {
  width: 100%;                                       /* 幅を100%に */
  padding: 0.5rem;                                   /* 内側の余白を設定 */
  border: 1px solid #ddd;                            /* 枠線を設定 */
  border-radius: 4px;                                /* 角を丸く */
}

button {
  background: #3498db;                               /* 背景色を青に */
  color: white;                                      /* 文字色を白に */
  padding: 0.5rem 1rem;                              /* 内側の余白を設定 */
  border: none;                                      /* 枠線を消す */
  border-radius: 4px;                                /* 角を丸く */
  cursor: pointer;                                   /* マウスカーソルをポインターに */
}

button:hover {
  background: #2980b9;                               /* マウスを乗せた時の背景色を濃い青に */
}

/* フッターのスタイル */
footer {
  background: #2c3e50;                               /* 背景色を濃い青に */
  color: white;                                      /* 文字色を白に */
  text-align: center;                                /* テキストを中央揃えに */
  padding: 1rem;                                     /* 内側の余白を設定 */
  position: fixed;                                   /* 固定位置に */
  bottom: 0;                                         /* 下端に配置 */
  width: 100%;                                       /* 幅を100%に */
}
```

CSSの基本的な書き方：
1. セレクタ - スタイルを適用する要素を指定（例：`body`, `header`, `.profile-image`）
2. プロパティ - 変更したい見た目の要素（例：`color`, `margin`, `padding`）
3. 値 - プロパティの具体的な設定値（例：`white`, `1rem`, `#3498db`）

よく使うプロパティ：
- `color` - 文字色
- `background` - 背景色
- `margin` - 外側の余白
- `padding` - 内側の余白
- `width`/`height` - 幅/高さ
- `border` - 枠線
- `border-radius` - 角の丸み
- `text-align` - テキストの配置
- `display` - 要素の表示方法

### 4. インタラクティブな機能を追加しよう

JavaScriptは、Webページに動きや機能を追加するためのプログラミング言語です。
ここでは、2つの基本的な機能を実装します：

1. お問い合わせフォームの送信処理
2. スムーズスクロール機能

まず、`script.js` を作成します：
```javascript
// フォーム送信時の処理
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // フォームの値を取得
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // 送信確認メッセージ
  alert(`送信完了！\n\n名前: ${name}\nメール: ${email}\nメッセージ: ${message}`);
  
  // フォームをリセット
  this.reset();
});

// スムーズスクロール
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
```

このJavaScriptコードの説明：

#### 1. フォーム送信の処理
```javascript
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // ...
});
```
- `document.getElementById('contact-form')` - HTMLの`id="contact-form"`を持つ要素（フォーム）を取得
- `addEventListener('submit', ...)` - フォームが送信されたときの処理を設定
- `e.preventDefault()` - フォームの通常の送信動作をキャンセル（ページのリロードを防ぐ）

```javascript
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;
```
- フォームの各入力欄（名前、メール、メッセージ）の値を取得
- `value`プロパティで入力されたテキストを取得

```javascript
alert(`送信完了！\n\n名前: ${name}\nメール: ${email}\nメッセージ: ${message}`);
```
- 送信された内容をポップアップで表示
- `\n`は改行を表す
- `${...}`で変数の値を文字列に埋め込む

```javascript
this.reset();
```
- フォームの内容をクリア（リセット）

#### 2. スムーズスクロール機能
```javascript
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
```
- `document.querySelectorAll('nav a')` - ナビゲーションメニューのすべてのリンクを取得
- `forEach` - 各リンクに対して処理を実行
- `addEventListener('click', ...)` - リンクがクリックされたときの処理を設定
- `e.preventDefault()` - リンクの通常の動作（ページジャンプ）をキャンセル
- `this.getAttribute('href')` - クリックされたリンクの`href`属性の値を取得（例：`#about`）
- `document.querySelector(...)` - 指定されたIDのセクションを取得
- `scrollIntoView({ behavior: 'smooth' })` - そのセクションまでスムーズにスクロール

#### 動作確認方法
1. お問い合わせフォーム
   - 名前、メール、メッセージを入力
   - 「送信」ボタンをクリック
   - 入力内容がポップアップで表示され、フォームがクリアされることを確認

2. スムーズスクロール
   - ナビゲーションメニューのリンクをクリック
   - 対応するセクションまでスムーズにスクロールすることを確認

## カスタマイズのポイント

1. プロフィール情報の更新
   - 名前、自己紹介文を変更
   - プロフィール画像を追加（`profile.jpg`として保存）
   - 趣味やスキルを自分のものに更新

2. デザインのカスタマイズ
   - `style.css`の色を変更（`#2c3e50`や`#3498db`などの色コード）
   - フォントを変更
   - レイアウトを調整

3. 機能の追加
   - SNSリンクの追加
   - ポートフォリオ作品の展示
   - アニメーション効果の追加

## 確認方法

1. すべてのファイルが正しく保存されているか確認：
```bash
ls -l /var/www/html/*.html
ls -l /var/www/html/style.css
ls -l /var/www/html/script.js
```

2. ブラウザで確認：
- 同じPCから：
  - `http://localhost` または `http://127.0.0.1`
- 同じネットワーク内の他のデバイスから：
  - `http://192.168.1.100`（あなたのプライベートIPアドレス）
- 自己紹介サイトが表示されることを確認
- 各セクションへのリンクが機能することを確認
- フォームが動作することを確認

## 困ったときは

- ファイルが表示されない → ファイル名とパスを確認
- スタイルが適用されない → CSSファイルのパスを確認
- 画像が表示されない → 画像ファイルのパスと名前を確認
- スクリプトが動作しない → ブラウザの開発者ツールでエラーを確認
- 他のデバイスからアクセスできない場合：
  - ファイアウォールの設定を確認
  - Apache2の設定で外部からのアクセスを許可
  ```bash
  sudo ufw allow 80/tcp
  ```
  - Apache2の設定ファイルを編集
  ```bash
  sudo nano /etc/apache2/apache2.conf
  ```
  以下の行を探して、必要に応じて修正：
  ```
  <Directory /var/www/html>
      Options Indexes FollowSymLinks
      AllowOverride All
      Require all granted
  </Directory>
  ```
  変更後、Apache2を再起動：
  ```bash
  sudo service apache2 restart
  ```

## 参考資料

- [MDN Web Docs](https://developer.mozilla.org/ja/)
- [W3Schools](https://www.w3schools.com/)
- [HTML Living Standard](https://html.spec.whatwg.org/)
- [Node.js公式サイト](https://nodejs.org/)
- [npm公式サイト](https://www.npmjs.com/)

### 7. Node.jsで開発環境を整えよう（オプション）

Node.jsは、JavaScriptをサーバーサイドで実行できるようにする環境です。
モダンなWeb開発では、Node.jsを使用して開発環境を整えることが一般的です。

#### 1. Node.jsのインストールと確認

1. Node.jsのインストール：
```bash
# Node.jsのバージョン管理ツール（nvm）をインストール
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# シェルを再起動するか、以下のコマンドを実行
source ~/.bashrc

# 最新のLTS版Node.jsをインストール
nvm install --lts
```

2. インストールの確認：
```bash
# Node.jsのバージョンを確認
node -v

# npmのバージョンを確認
npm -v
```

#### 2. プロジェクトの作成と設定

1. プロジェクトディレクトリの作成：
```bash
# プロジェクトディレクトリを作成
mkdir my-profile-site
cd my-profile-site

# 既存のファイルをコピー
cp /var/www/html/*.{html,css,js} .
```

2. プロジェクトの初期化：
```bash
# package.jsonの作成
npm init -y

# 開発用サーバーのインストール
npm install --save-dev live-server
```

3. `package.json`の編集：
```bash
# package.jsonを開く
nano package.json
```

以下のように`scripts`セクションを編集：
```json
{
  "name": "my-profile-site",
  "version": "1.0.0",
  "description": "My personal profile site",
  "main": "index.html",
  "scripts": {
    "start": "live-server --port=8080",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "live-server": "^1.2.2"
  }
}
```

#### 3. 開発サーバーの起動と確認

1. 開発サーバーの起動：
```bash
npm start
```

2. ブラウザで確認：
- `http://localhost:8080` にアクセス
- サイトが表示されることを確認
- ファイルを編集して保存すると、自動的にブラウザが更新されることを確認

#### 4. 便利な機能の追加

1. 画像の最適化ツールのインストール：
```bash
npm install --save-dev sharp
```

2. 画像最適化スクリプトの作成：
```bash
# scriptsディレクトリを作成
mkdir scripts

# 画像最適化スクリプトを作成
nano scripts/optimize-images.js
```

以下の内容を追加：
```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 画像を最適化する関数
async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(800) // 最大幅を800pxに
      .jpeg({ quality: 80 }) // JPEG品質を80%に
      .toFile(outputPath);
    console.log(`最適化完了: ${outputPath}`);
  } catch (error) {
    console.error(`エラー: ${error.message}`);
  }
}

// プロフィール画像を最適化
optimizeImage('profile.jpg', 'profile-optimized.jpg');
```

3. スクリプトの実行：
```bash
node scripts/optimize-images.js
```

#### 5. 開発の効率化

1. ファイル監視の自動化：
```bash
npm install --save-dev nodemon
```

2. `package.json`の`scripts`セクションに追加：
```json
{
  "scripts": {
    "start": "live-server --port=8080",
    "optimize": "node scripts/optimize-images.js",
    "watch": "nodemon scripts/optimize-images.js"
  }
}
```

3. 使用例：
```bash
# 開発サーバーの起動
npm start

# 画像の最適化
npm run optimize

# 画像の自動最適化（ファイル変更を監視）
npm run watch
```

これにより、以下の機能が使えるようになります：
- ファイルの変更を自動検知してブラウザを更新
- ローカル開発サーバー（http://localhost:8080）
- モジュールの管理（npm）
- 画像の自動最適化
- 開発効率の向上

## 参考資料

- [MDN Web Docs](https://developer.mozilla.org/ja/)
- [W3Schools](https://www.w3schools.com/)
- [HTML Living Standard](https://html.spec.whatwg.org/)
- [Node.js公式サイト](https://nodejs.org/)
- [npm公式サイト](https://www.npmjs.com/) 
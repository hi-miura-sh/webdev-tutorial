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

3. インストールと起動が成功したか確認するには、ブラウザで `http://localhost` にアクセスしてみましょう。
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

このHTMLファイルの各部分について説明します：

1. `<header>` - サイトのヘッダー部分（タイトルとナビゲーション）
2. `<nav>` - ナビゲーションメニュー
3. `<main>` - メインコンテンツ
4. `<section>` - コンテンツの区切り（About Me、趣味、スキル、お問い合わせ）
5. `<form>` - お問い合わせフォーム

### 3. スタイルを追加しよう

1. 同じディレクトリに `style.css` を作成：
```css
/* 全体のスタイル */
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  color: #333;
}

/* ヘッダーのスタイル */
header {
  background: #2c3e50;
  color: white;
  padding: 1rem;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  color: #3498db;
}

/* メインコンテンツのスタイル */
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

section {
  margin-bottom: 3rem;
}

/* プロフィール画像 */
.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 1rem 0;
}

/* フォームのスタイル */
form div {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #2980b9;
}

/* フッターのスタイル */
footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}
```

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
- `http://localhost` にアクセス
- 自己紹介サイトが表示されることを確認
- 各セクションへのリンクが機能することを確認
- フォームが動作することを確認

## 困ったときは

- ファイルが表示されない → ファイル名とパスを確認
- スタイルが適用されない → CSSファイルのパスを確認
- 画像が表示されない → 画像ファイルのパスと名前を確認
- スクリプトが動作しない → ブラウザの開発者ツールでエラーを確認

## 参考資料

- [MDN Web Docs](https://developer.mozilla.org/ja/)
- [W3Schools](https://www.w3schools.com/)
- [HTML Living Standard](https://html.spec.whatwg.org/) 
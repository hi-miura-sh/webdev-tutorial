# Web開発入門チュートリアル

## はじめに

このチュートリアルでは、実際に手を動かしながらWeb開発の基礎を学んでいきます。
「見る」だけでなく「作る」ことで、より深く理解することができます。

## 準備

### 1. 開発環境の準備

まず、WSLでApache2を起動します：
```bash
sudo service apache2 start
```

### 2. 最初のWebページを作ろう

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
  <title>Web開発入門</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>ようこそ Web開発入門サイトへ</h1>
  <nav>
    <ul>
      <li><a href="html.html">HTML 入門</a></li>
      <li><a href="css.html">CSS 入門</a></li>
      <li><a href="js.html">JavaScript 入門</a></li>
    </ul>
  </nav>
</body>
</html>
```

3. ブラウザで確認：
- ブラウザを開いて `http://localhost` にアクセス
- シンプルなWebページが表示されるはずです

### 3. スタイルを追加しよう

1. 同じディレクトリに `style.css` を作成：
```css
body {
  background: #fefefe;
  font-family: sans-serif;
  margin: 2em;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  margin-bottom: 10px;
}

a {
  color: #007acc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

2. ブラウザを更新：
- デザインが適用されていることを確認

### 4. HTMLの基本を学ぼう

1. `html.html` を作成：
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>HTML 入門</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>HTMLとは？</h1>
  <p>HTMLはウェブページの構造を定義するためのマークアップ言語です。</p>
  
  <h2>基本構造</h2>
  <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;...&lt;/head&gt;
  &lt;body&gt;...&lt;/body&gt;
&lt;/html&gt;
  </pre>

  <h2>よく使うタグ</h2>
  <ul>
    <li>&lt;h1&gt; - 見出し</li>
    <li>&lt;p&gt; - 段落</li>
    <li>&lt;a&gt; - リンク</li>
    <li>&lt;img&gt; - 画像</li>
  </ul>

  <h2>練習問題</h2>
  <p>以下の要素を使って、自己紹介ページを作ってみましょう：</p>
  <ul>
    <li>見出し（h1, h2）</li>
    <li>段落（p）</li>
    <li>リスト（ul, li）</li>
    <li>画像（img）</li>
  </ul>

  <a href="index.html">トップに戻る</a>
</body>
</html>
```

2. ブラウザで確認：
- `http://localhost/html.html` にアクセス
- HTMLの基本が学べるページが表示されます

### 5. CSSの基本を学ぼう

1. `css.html` を作成：
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>CSS 入門</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>CSSとは？</h1>
  <p>CSSはウェブページのデザインを定義するためのスタイルシート言語です。</p>

  <h2>基本的な書き方</h2>
  <pre>
セレクタ {
  プロパティ: 値;
}
  </pre>

  <h2>よく使うプロパティ</h2>
  <ul>
    <li>color - 文字色</li>
    <li>background - 背景</li>
    <li>margin - 外側の余白</li>
    <li>padding - 内側の余白</li>
  </ul>

  <h2>練習問題</h2>
  <p>以下のスタイルを適用してみましょう：</p>
  <ul>
    <li>見出しを青色に</li>
    <li>段落に余白を追加</li>
    <li>リストのマークを変更</li>
  </ul>

  <a href="index.html">トップに戻る</a>
</body>
</html>
```

### 6. JavaScriptの基本を学ぼう

1. `js.html` を作成：
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JavaScript 入門</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>JavaScriptとは？</h1>
  <p>JavaScriptはウェブページに動きを追加するためのプログラミング言語です。</p>

  <h2>基本的な書き方</h2>
  <pre>
&lt;script&gt;
  // ここにJavaScriptのコードを書きます
&lt;/script&gt;
  </pre>

  <h2>簡単な例</h2>
  <button onclick="alert('こんにちは！')">クリックしてください</button>

  <h2>練習問題</h2>
  <p>以下の機能を実装してみましょう：</p>
  <ul>
    <li>ボタンをクリックして文字を表示</li>
    <li>時間を表示する</li>
    <li>簡単な計算機を作る</li>
  </ul>

  <a href="index.html">トップに戻る</a>
</body>
</html>
```

## 確認方法

1. すべてのファイルが正しく保存されているか確認：
```bash
ls -l /var/www/html/*.html
ls -l /var/www/html/style.css
```

2. ブラウザで確認：
- `http://localhost` - トップページ
- `http://localhost/html.html` - HTML入門
- `http://localhost/css.html` - CSS入門
- `http://localhost/js.html` - JavaScript入門

## 次のステップ

1. 各ページの内容をカスタマイズしてみましょう
2. 新しいページを追加してみましょう
3. スタイルを変更してみましょう
4. インタラクティブな要素を追加してみましょう

## 困ったときは

- ファイルが表示されない → ファイル名とパスを確認
- スタイルが適用されない → CSSファイルのパスを確認
- エラーが発生する → ブラウザの開発者ツールで確認

## 参考資料

- [MDN Web Docs](https://developer.mozilla.org/ja/)
- [W3Schools](https://www.w3schools.com/)
- [HTML Living Standard](https://html.spec.whatwg.org/) 
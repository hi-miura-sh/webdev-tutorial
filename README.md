# 自己紹介サイト作成チュートリアル

## 目次
1. [はじめに](#はじめに)
2. [準備](#準備)
   - [開発環境の準備](#1-開発環境の準備)
   - [自己紹介サイトの基本構造を作ろう](#2-自己紹介サイトの基本構造を作ろう)
3. [スタイルの追加](#3-スタイルを追加しよう)
4. [インタラクティブな機能](#4-インタラクティブな機能を追加しよう)
5. [Bootstrapでデザインを簡単に整えよう](#5-bootstrapでデザインを簡単に整えよう)
6. [カスタマイズのポイント](#カスタマイズのポイント)
7. [確認方法](#確認方法)
8. [Node.js開発環境](#7-nodejsで開発環境を整えようオプション)
9. [困ったときは](#困ったときは)
10. [セキュリティ](#セキュリティに関する重要な注意点)
   - [セキュリティの基本用語](#セキュリティの基本用語)
   - [セキュリティの重要性](#なぜセキュリティが重要なのか)
   - [リスクと対策](#具体的なリスクと対策)
11. [参考資料](#参考資料)

[目次に戻る](#目次)

## はじめに

このチュートリアルでは、HTML、CSS、JavaScriptを使って、あなただけの自己紹介サイトを作成します。
実際に手を動かしながら、Web開発の基礎を学んでいきましょう。

[目次に戻る](#目次)

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

有線LAN接続の場合：
```
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:15:5d:01:ca:05 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.100/24 brd 192.168.1.255 scope global dynamic eth0
       valid_lft 86397sec preferred_lft 86397sec
    inet6 fe80::215:5dff:fe01:ca05/64 scope link
       valid_lft forever preferred_lft 86397sec
```

無線LAN（Wi-Fi）接続の場合：
```
3: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:15:5d:01:ca:06 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.101/24 brd 192.168.1.255 scope global dynamic wlan0
       valid_lft 86397sec preferred_lft 86397sec
    inet6 fe80::215:5dff:fe01:ca06/64 scope link
       valid_lft forever preferred_lft 86397sec
```

IPアドレスの見分け方：
- 有線LAN接続：`eth0`インターフェースの`inet`の後に表示されるIPアドレス（例：`192.168.1.100`）
- 無線LAN接続：`wlan0`インターフェースの`inet`の後に表示されるIPアドレス（例：`192.168.1.101`）

4. インストールと起動が成功したか確認するには、ブラウザで以下のURLにアクセスしてみましょう：
- 同じPCから：`http://localhost` または `http://127.0.0.1`
- 同じネットワーク内の他のデバイスから：
  - 有線LAN接続の場合：`http://192.168.1.100`（あなたの有線LANのIPアドレス）
  - 無線LAN接続の場合：`http://192.168.1.101`（あなたの無線LANのIPアドレス）

「Apache2 Ubuntu Default Page」というページが表示されれば成功です。

注意点：
- IPアドレスは環境によって異なる場合があります
- 有線LANと無線LANを同時に使用している場合、両方のIPアドレスが表示されます
- プライベートIPアドレスは通常`192.168.`または`10.`で始まります
- インターフェース名（`eth0`や`wlan0`）は環境によって異なる場合があります

[目次に戻る](#目次)

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

3. パーミッションの問題が発生した場合は、以下の手順で対処します：

```bash
# ディレクトリのパーミッションを確認
ls -l /var/www/html

# 必要に応じてディレクトリのパーミッションを変更
sudo chmod 755 /var/www/html

# ファイルのパーミッションを確認
ls -l /var/www/html/index.html

# 必要に応じてファイルのパーミッションを変更
sudo chmod 644 /var/www/html/index.html

# Apacheユーザー（www-data）に所有権を変更
sudo chown www-data:www-data /var/www/html/index.html
```

注意：
- 755はディレクトリに対して、所有者は読み書き実行可能、グループとその他は読み実行可能
- 644はファイルに対して、所有者は読み書き可能、グループとその他は読み取りのみ可能
- セキュリティのため、必要最小限のパーミッションを設定することが重要です

このHTMLファイルをブラウザで開くと、非常にシンプルな見た目になります。
テキストは左揃えで、余白も適切に設定されておらず、見た目が整っていません。
これをCSSで整えていきましょう。

[目次に戻る](#目次)

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

[目次に戻る](#目次)

### 4. インタラクティブな機能を追加しよう

JavaScriptは、Webページに動きや機能を追加するためのプログラミング言語です。
HTMLとCSSだけでは、静的な（動きのない）Webページしか作れません。
JavaScriptを使うことで、以下のような機能を実現できます：

1. ユーザーとの対話
   - フォームの送信処理
   - ボタンクリック時の動作
   - 入力値の検証

2. 動的なコンテンツの更新
   - ページの一部だけを更新
   - データの非同期読み込み
   - アニメーション効果

3. ユーザー体験の向上
   - スムーズなスクロール
   - ページ遷移のアニメーション
   - レスポンシブな動作

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
  
  // フォームの値を取得
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // 送信確認メッセージ
  alert(`送信完了！\n\n名前: ${name}\nメール: ${email}\nメッセージ: ${message}`);
  
  // フォームをリセット
  this.reset();
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

[目次に戻る](#目次)

## カスタマイズのポイント

1. プロフィール情報の更新
   - 名前、自己紹介文を変更
   - プロフィール画像を追加（`profile.jpg`として保存）
   - 趣味やスキルを自分のものに更新

2. デザインのカスタマイズ
   - `style.css`の色を変更（`#2c3e50`や`#3498db`などの色コード）
   - フォントを変更
   - レイアウトを調整

3. 機能の追加（JavaScriptを使用）
   - SNSリンクの追加
     - クリック時にSNSプロフィールを新しいタブで開く
     - シェアボタンの実装
     - フォロワー数の表示（API連携）

   - ポートフォリオ作品の展示
     - 画像ギャラリーの実装
     - スライドショー機能
     - フィルター機能（カテゴリー別表示）

   - アニメーション効果の追加
     - スクロール時の要素のフェードイン
     - ホバー時のエフェクト
     - ページ遷移のアニメーション


[目次に戻る](#目次)

## 5. Bootstrapでデザインを簡単に整えよう

### Bootstrapとは？
Bootstrapは、Webサイトのデザインを簡単に整えることができる人気のフレームワークです。
「フレームワーク」とは、開発を効率化するための便利な機能や部品がまとまったもののことです。

#### なぜBootstrapを使うの？
1. 時間の節約
   - デザインの基本部分を一から作る必要がない
   - 既存の部品を組み合わせるだけで見栄えの良いサイトが作れる
   - レスポンシブデザイン（スマートフォン対応）が簡単に実現できる

2. 品質の向上
   - プロが作ったデザインを利用できる
   - ブラウザの違いによる表示の違いを気にしなくて良い
   - 最新のWebデザインのトレンドに合わせた部品が用意されている

3. 学習のしやすさ
   - 多くのWebサイトで使われている
   - 日本語の情報が豊富
   - 基本的な使い方がシンプル

### 1. Bootstrapの導入

#### CDNを使った導入方法
CDN（Content Delivery Network）とは、インターネット上でファイルを配信する仕組みです。
Bootstrapのファイルを自分のサーバーに置かなくても、インターネットから読み込むことができます。

注意：CDNを使用するにはインターネット接続が必要です。
インターネットに接続できない環境では、以下の「オフライン環境での使用方法」を参照してください。

1. `index.html`の`<head>`タグ内に以下のコードを追加：
```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```
このコードは、Bootstrapのスタイル（デザイン）を読み込むためのものです。

2. `</body>`タグの直前に以下のコードを追加：
```html
<!-- Bootstrap JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```
このコードは、Bootstrapの動的な機能（ドロップダウンメニューなど）を動かすためのものです。

#### オフライン環境での使用方法
インターネットに接続できない環境でもBootstrapを使用するには、ファイルをダウンロードしてローカルに保存する必要があります。

1. Bootstrapのファイルをダウンロード：
   - [Bootstrap公式サイト](https://getbootstrap.com/docs/5.3/getting-started/download/)にアクセス
   - 「Download」セクションから「Compiled CSS and JS」をダウンロード
   - ダウンロードしたZIPファイルを解凍

2. ファイルを配置：
```bash
# プロジェクトディレクトリにcssとjsフォルダを作成
mkdir css js

# ダウンロードしたファイルを配置
# css/bootstrap.min.css を css/ フォルダに
# js/bootstrap.bundle.min.js を js/ フォルダに
```

3. HTMLファイルの修正：
```html
<!-- CDNの代わりにローカルのファイルを参照 -->
<head>
  <!-- Bootstrap CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <!-- コンテンツ -->
  
  <!-- Bootstrap JavaScript -->
  <script src="js/bootstrap.bundle.min.js"></script>
</body>
```

注意点：
- オフライン環境では、Google Fontsなどの外部リソースも使用できません
- フォントはシステムにインストールされているものを使用するか、Webフォントファイルをローカルに保存する必要があります
- 画像やその他の外部リソースも同様に、ローカルに保存する必要があります

[目次に戻る](#目次)

### 2. 基本的な使い方

#### グリッドシステム
Bootstrapのグリッドシステムは、画面を12個のカラム（列）に分けて、要素を配置する仕組みです。
これにより、画面の大きさに応じて要素の配置を自動的に調整できます。

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">左側のコンテンツ</div>
    <div class="col-md-4">中央のコンテンツ</div>
    <div class="col-md-4">右側のコンテンツ</div>
  </div>
</div>
```

クラスの意味：
- `container`: コンテンツを中央寄せにし、左右に余白を作る
- `row`: 横並びの行を作成する
- `col-md-4`: 
  - `md`: 中サイズの画面（768px以上）で
  - `4`: 12カラムのうち4カラム分の幅を取る

画面サイズの種類：
- `sm`: 小さい画面（576px以上）
- `md`: 中くらいの画面（768px以上）
- `lg`: 大きい画面（992px以上）
- `xl`: より大きい画面（1200px以上）

#### よく使うクラス

1. ボタン：
```html
<button class="btn btn-primary">プライマリーボタン</button>
<button class="btn btn-secondary">セカンダリーボタン</button>
<button class="btn btn-success">成功ボタン</button>
<button class="btn btn-danger">危険ボタン</button>
```

ボタンの種類：
- `btn-primary`: 主要な操作用（青）
- `btn-secondary`: 補助的な操作用（グレー）
- `btn-success`: 成功を示す操作用（緑）
- `btn-danger`: 危険な操作用（赤）

2. カード：
カードは、情報を整理して表示するためのコンポーネントです。
画像、タイトル、説明文などをまとめて表示できます。

```html
<div class="card">
  <img src="profile.jpg" class="card-img-top" alt="プロフィール画像">
  <div class="card-body">
    <h5 class="card-title">カードのタイトル</h5>
    <p class="card-text">カードの内容をここに書きます。</p>
    <a href="#" class="btn btn-primary">詳細を見る</a>
  </div>
</div>
```

カードの主なクラス：
- `card`: カード全体を定義
- `card-img-top`: カードの上部に画像を配置
- `card-body`: カードの内容部分
- `card-title`: カードのタイトル
- `card-text`: カードの本文

3. ナビゲーションバー：
ナビゲーションバーは、サイト内の主要なリンクを表示するためのコンポーネントです。
スマートフォンでは自動的にハンバーガーメニューに変わります。

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">サイト名</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#about">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#hobby">趣味</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">スキル</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

ナビゲーションバーの主なクラス：
- `navbar`: ナビゲーションバー全体
- `navbar-expand-lg`: 大きい画面でメニューを展開
- `navbar-dark`: 暗い背景用のスタイル
- `bg-dark`: 暗い背景色
- `navbar-brand`: サイト名やロゴ
- `navbar-toggler`: ハンバーガーメニューボタン
- `navbar-nav`: メニュー項目のリスト
- `nav-item`: 個々のメニュー項目
- `nav-link`: メニューのリンク

### 3. カスタマイズ例

#### プロフィールセクションの改善
このセクションでは、Bootstrapのグリッドシステムとユーティリティクラスを使って、
プロフィール情報を見やすく整理します。

```html
<section id="about" class="py-5">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img src="profile.jpg" class="img-fluid rounded-circle" alt="プロフィール画像">
      </div>
      <div class="col-md-8">
        <h2 class="mb-4">About Me</h2>
        <p class="lead">はじめまして！私は[あなたの名前]です。</p>
        <p>[簡単な自己紹介文をここに書きます]</p>
        <div class="mt-4">
          <a href="#" class="btn btn-primary me-2">ポートフォリオを見る</a>
          <a href="#" class="btn btn-outline-secondary">お問い合わせ</a>
        </div>
      </div>
    </div>
  </div>
</section>
```

使用しているクラスの説明：
- `py-5`: 上下の余白を大きく設定
- `align-items-center`: 縦方向の中央揃え
- `img-fluid`: 画像を親要素に合わせてリサイズ
- `rounded-circle`: 画像を円形に
- `lead`: 本文より大きい文字サイズ
- `me-2`: 右側の余白を設定
- `btn-outline-secondary`: 枠線のみのボタン

#### スキルセクションの改善
スキルをカード形式で表示し、進捗バーで視覚的に表現します。

```html
<section id="skills" class="py-5 bg-light">
  <div class="container">
    <h2 class="text-center mb-5">スキル</h2>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">HTML/CSS</h5>
            <div class="progress mb-3">
              <div class="progress-bar" role="progressbar" style="width: 90%">90%</div>
            </div>
            <p class="card-text">レスポンシブデザインの実装が得意です。</p>
          </div>
        </div>
      </div>
      <!-- 他のスキルカードも同様に -->
    </div>
  </div>
</section>
```

使用しているクラスの説明：
- `bg-light`: 薄いグレーの背景色
- `text-center`: テキストを中央揃え
- `mb-5`: 下の余白を大きく設定
- `h-100`: カードの高さを揃える
- `progress`: 進捗バーのコンテナ
- `progress-bar`: 進捗バー自体

#### お問い合わせフォームの改善
Bootstrapのフォームコンポーネントを使って、使いやすい入力フォームを作成します。

```html
<section id="contact" class="py-5">
  <div class="container">
    <h2 class="text-center mb-5">お問い合わせ</h2>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <form id="contact-form" class="needs-validation" novalidate>
          <div class="mb-3">
            <label for="name" class="form-label">お名前</label>
            <input type="text" class="form-control" id="name" required>
            <div class="invalid-feedback">
              お名前を入力してください。
            </div>
          </div>
          <!-- 他のフォーム要素も同様に -->
        </form>
      </div>
    </div>
  </div>
</section>
```

使用しているクラスの説明：
- `justify-content-center`: 横方向の中央揃え
- `needs-validation`: フォームのバリデーション用
- `form-label`: フォームのラベル
- `form-control`: フォームの入力欄
- `invalid-feedback`: エラーメッセージ

### 4. カスタマイズのポイント

#### 1. 色の変更
Bootstrapのデフォルトの色を変更して、サイトの雰囲気を変えることができます。

```html
<!-- カスタムCSSを追加 -->
<style>
  :root {
    --bs-primary: #2c3e50;    /* メインカラー */
    --bs-secondary: #3498db;  /* アクセントカラー */
  }
</style>
```

#### 2. フォントの変更
Google Fontsを使って、日本語フォントを追加します。

```html
<!-- Google Fontsを追加 -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">

<style>
  body {
    font-family: 'Noto Sans JP', sans-serif;
  }
</style>
```

#### 3. アニメーションの追加
AOS（Animate On Scroll）ライブラリを使って、スクロール時のアニメーションを追加します。

```html
<!-- AOSライブラリを追加 -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<script>
  AOS.init();
</script>

<!-- アニメーションの適用 -->
<div data-aos="fade-up">
  フェードインしながら上から表示される要素
</div>
```

### 5. レスポンシブデザインの確認

レスポンシブデザインとは、画面の大きさに応じてレイアウトが自動的に変化するデザインのことです。
Bootstrapを使うと、このレスポンシブデザインが簡単に実現できます。

確認手順：
1. ブラウザの開発者ツールを開く（F12キー）
2. デバイスモードを選択（スマートフォンやタブレットのアイコン）
3. スマートフォンやタブレットの表示を確認
4. レイアウトが崩れていないか確認
5. 必要に応じて調整

よくある調整ポイント：
- 画像のサイズ
- フォントサイズ
- 余白の大きさ
- メニューの表示方法

[目次に戻る](#目次)

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

[目次に戻る](#目次)

## 7. Node.jsで開発環境を整えよう（オプション）

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

[目次に戻る](#目次)

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

[目次に戻る](#目次)

## セキュリティに関する重要な注意点

### セキュリティの基本用語

1. パーミッションとは？
   - ファイルやフォルダに対する「アクセス権限」のこと
   - 誰が読み取り（r）、書き込み（w）、実行（x）できるかを制御
   - 例：`755`は「所有者は読み書き実行可能、他のユーザーは読み取りと実行のみ可能」を意味

2. 所有者とは？
   - ファイルやフォルダの「持ち主」のこと
   - システム上でそのファイルを管理する権限を持つユーザー
   - Webサーバーの場合、通常は`www-data`というユーザーが所有者となる

3. ファイアウォールとは？
   - コンピュータやネットワークを守る「防壁」のようなもの
   - 外部からの不正なアクセスをブロック
   - 必要な通信（HTTPやHTTPS）のみを許可

### なぜセキュリティが重要なのか？

Webサイトを作成する際、セキュリティは非常に重要な要素です。以下のような理由があります：

1. 個人情報の保護
   - お問い合わせフォームで収集した情報が漏洩する可能性
   - 悪意のあるユーザーによる情報の不正取得
   - プライバシーの侵害を防ぐ

2. サーバーの保護
   - 不正アクセスによるサーバーの乗っ取り
   - 悪意のあるプログラムの実行
   - 他のユーザーへの影響を防ぐ

3. ユーザーの安全確保
   - ウイルスやマルウェアの感染を防ぐ
   - フィッシング詐欺などの被害を防ぐ
   - 安全なWebサイトの提供

4. 信頼性の維持
   - セキュリティ事故による信頼の失墜を防ぐ
   - プロフェッショナルな印象を与える
   - 長期的な運営の実現

### 具体的なリスクと対策

1. ファイルのパーミッション設定
   - リスク：不適切なパーミッションにより、ファイルが改ざんされる
   - 対策：適切な読み書き権限の設定

2. フォームのセキュリティ
   - リスク：不正な入力によるサーバーへの攻撃
   - 対策：入力値の検証と制限

3. ネットワークセキュリティ
   - リスク：外部からの不正アクセス
   - 対策：ファイアウォールの設定とポート制限

4. 機密情報の管理
   - リスク：パスワードやAPIキーの漏洩
   - 対策：環境変数や設定ファイルでの管理

### 1. ファイルのパーミッション設定

1. 適切なパーミッションの設定：
```bash
# ディレクトリのパーミッション設定
sudo chmod 755 /var/www/html

# ファイルのパーミッション設定
sudo chmod 644 /var/www/html/*.html
sudo chmod 644 /var/www/html/*.css
sudo chmod 644 /var/www/html/*.js

# 画像ファイルのパーミッション設定
sudo chmod 644 /var/www/html/*.jpg
sudo chmod 644 /var/www/html/*.png
```

2. 所有者の設定：
```bash
# Apache2の実行ユーザー（www-data）を所有者に設定
sudo chown -R www-data:www-data /var/www/html
```

### 2. フォームのセキュリティ

1. 入力値の検証：
```javascript
// フォーム送信時の処理
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // 入力値の取得
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  // 入力値の検証
  if (name.length < 2) {
    alert('名前は2文字以上入力してください。');
    return;
  }
  
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    alert('有効なメールアドレスを入力してください。');
    return;
  }
  
  if (message.length < 10) {
    alert('メッセージは10文字以上入力してください。');
    return;
  }
  
  // 送信処理
  alert(`送信完了！\n\n名前: ${name}\nメール: ${email}\nメッセージ: ${message}`);
  this.reset();
});
```

### 3. ネットワークセキュリティ

1. ファイアウォールの設定：
```bash
# 必要なポートのみを開放
sudo ufw allow 80/tcp  # HTTP
sudo ufw allow 443/tcp # HTTPS
```

2. Apache2のセキュリティ設定：
```bash
# セキュリティ設定ファイルの編集
sudo nano /etc/apache2/conf-available/security.conf
```

以下の設定を確認・変更：
```apache
# サーバー情報の隠蔽
ServerTokens Prod
ServerSignature Off

# ディレクトリリスティングの無効化
Options -Indexes

# 特定のファイルへのアクセス制限
<FilesMatch "^\.">
    Order allow,deny
    Deny from all
</FilesMatch>
```

### 4. その他の重要な注意点

1. 機密情報の取り扱い：
   - パスワードやAPIキーは直接コードに記述しない
   - 環境変数や設定ファイルで管理
   - `.gitignore`に機密情報を含むファイルを追加

2. 定期的な更新：
   - システムの更新：`sudo apt update && sudo apt upgrade`
   - Apache2の更新：`sudo apt upgrade apache2`
   - セキュリティパッチの適用

3. バックアップ：
   - 定期的なバックアップの作成
   - 重要なファイルの複数箇所での保存
   - バックアップの暗号化

4. エラーメッセージの制御：
   - 詳細なエラー情報を外部に表示しない
   - カスタムエラーページの設定
   - ログファイルの適切な管理

### 5. 開発環境と本番環境の分離

1. 開発環境：
   - ローカルネットワーク内でのみアクセス可能
   - デバッグ情報の表示を許可
   - テスト用のデータを使用

2. 本番環境：
   - 適切なセキュリティ設定の適用
   - エラーメッセージの制限
   - アクセス制限の設定

### 6. セキュリティチェックリスト

- [ ] パーミッションの適切な設定
- [ ] 入力値の検証
- [ ] ファイアウォールの設定
- [ ] Apache2のセキュリティ設定
- [ ] 機密情報の適切な管理
- [ ] 定期的な更新の実施
- [ ] バックアップの作成
- [ ] エラーメッセージの制御
- [ ] 開発環境と本番環境の分離

[目次に戻る](#目次)

## 参考資料

- [MDN Web Docs](https://developer.mozilla.org/ja/)
- [W3Schools](https://www.w3schools.com/)
- [HTML Living Standard](https://html.spec.whatwg.org/)
- [Node.js公式サイト](https://nodejs.org/)
- [npm公式サイト](https://www.npmjs.com/)

[目次に戻る](#目次) 
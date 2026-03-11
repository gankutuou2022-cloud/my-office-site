# サイト設計：コンフィグ駆動型テンプレート設計書

**設計日**: 2026/03/01
**コンセプト**: 「事務所の情報は1ファイルだけ書き換えればOK」

---

## 🎯 この設計の目的

従来の作り方では、事務所名や電話番号を変えるときに
**すべてのHTMLファイルを1つずつ開いて修正**する必要がありました。

```
❌ 従来方式（変更のたびに大変）
index.html    → 3箇所に事務所名
about.html    → 5箇所に事務所名
contact.html  → 2箇所に電話番号
pricing.html  → 10箇所に料金
     ↓ 1つ変更するだけで6ファイルを触る必要がある
```

この設計では **`js/config.js`** という1つのファイルに
「変わりうる情報」をすべて集約します。

```
✅ コンフィグ駆動方式
js/config.js のみ書き換える
     ↓
全ページに自動反映される
```

---

## 📁 ファイル構成

```
template-sharoushi/
├── index.html          ← 構造のみ。テキストは config.js から
├── about.html
├── services.html
├── pricing.html
├── contact.html
├── privacy.html
├── css/
│   └── style.css
├── js/
│   ├── config.js       ← ★ここだけ書き換えればOK
│   └── main.js         ← config.jsを読み込み、全ページに反映
└── README.md
```

---

## ⚙️ `js/config.js` の設計

**このファイルを最初に1回だけ書き換えるだけで、サイト全体が自動的にカスタマイズされます。**

```javascript
// ============================================
// 【カスタマイズ設定ファイル】
// このファイルだけ書き換えてください！
// ============================================

const OFFICE_CONFIG = {

  // --- 基本情報 ---
  officeName:      "〇〇社会保険労務士事務所",
  ownerName:       "山田 太郎",
  ownerTitle:      "代表 特定社会保険労務士",
  catchphrase:     "中小企業の労務管理を、まるごとサポート",
  subCatchphrase:  "建設業・製造業専門。労務トラブルをゼロにします。",

  // --- 連絡先 ---
  tel:             "03-1234-5678",
  fax:             "03-1234-5679",
  email:           "info@example.com",
  address:         "東京都新宿区〇〇1-2-3 〇〇ビル4F",
  googleMapsUrl:   "https://maps.google.com/?q=...",
  googleFormsUrl:  "https://docs.google.com/forms/d/e/...",

  // --- 営業情報 ---
  businessHours:   "平日 9:00〜18:00",
  holiday:         "土・日・祝日",
  firstConsult:    "初回相談無料",

  // --- SEO設定 ---
  siteTitle:       "〇〇社会保険労務士事務所 | 東京・新宿",
  siteDescription: "東京新宿の社会保険労務士事務所。給与計算・就業規則・助成金申請を中小企業向けにサポート。初回相談無料。",
  siteUrl:         "https://example.pages.dev",

  // --- 料金設定（税込価格）---
  pricing: {
    advisoryBasic: {
      label:  "顧問プラン（相談のみ）",
      price:  "月額 20,000円〜",
      note:   "〜9名",
    },
    advisoryFull: {
      label:  "顧問プラン（手続き込み）",
      price:  "月額 30,000円〜",
      note:   "〜9名",
    },
    payroll: {
      label:  "給与計算代行",
      price:  "月額 16,500円〜",
      note:   "〜9名、追加1名1,650円",
    },
    workRules: {
      label:  "就業規則 新規作成",
      price:  "110,000円〜",
      note:   "税込・内容による",
    },
    subsidy: {
      label:  "助成金申請",
      price:  "成功報酬 受給額の15%",
      note:   "着手金0円",
    },
  },

  // --- 実績（数値化）---
  achievements: {
    clients:    "50",  // 顧問先件数
    years:      "10",  // 開業年数
    contracts:  "200", // 延べ契約件数
  },

  // --- SNSリンク（不要な場合は空欄） ---
  sns: {
    twitter:    "",
    facebook:   "",
    instagram:  "",
    line:       "",
  },
};
```

---

## ⚙️ `js/main.js` の設計（自動反映の仕組み）

`main.js` は `config.js` の値を読み込み、HTML上の`data-config`属性を持つ要素に自動的にテキストを流し込みます。

```javascript
// main.js（一部抜粋）

document.addEventListener('DOMContentLoaded', () => {

  // --- config.jsの値をページ全体に反映 ---
  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.getAttribute('data-config');
    const value = getNestedValue(OFFICE_CONFIG, key);
    if (value) el.textContent = value;
  });

  // --- ページタイトルを設定 ---
  document.title = OFFICE_CONFIG.siteTitle;

  // --- Google Formsのiframeを挿入 ---
  const formContainer = document.getElementById('google-form-container');
  if (formContainer && OFFICE_CONFIG.googleFormsUrl) {
    formContainer.innerHTML =
      `<iframe src="${OFFICE_CONFIG.googleFormsUrl}" ...></iframe>`;
  }

  // --- Google Mapsのリンクを設定 ---
  document.querySelectorAll('[data-map-link]').forEach(el => {
    el.href = OFFICE_CONFIG.googleMapsUrl;
  });

});
```

---

## 📝 HTML側の書き方（例：index.html）

HTMLには「どこに何を入れるか」の「入れ物」だけを定義します。

```html
<!-- 事務所名を表示する場所 -->
<h1 class="hero-title">
  <span data-config="officeName">事務所名</span>
</h1>

<!-- キャッチコピー -->
<p data-config="catchphrase">キャッチコピー</p>

<!-- 電話番号 -->
<a href="tel:0312345678" data-config="tel">電話番号</a>

<!-- 料金（顧問プラン） -->
<td data-config="pricing.advisoryBasic.price">料金</td>
<td data-config="pricing.advisoryBasic.note">備考</td>
```

---

## 🎓 Udemy講座でのカスタマイズ手順（受講者向け）

```
STEP 1: config.js をVS Codeで開く
STEP 2: 自分の事務所情報に書き換える（コピペでOK）
STEP 3: 保存（Ctrl+S）
STEP 4: index.html をブラウザで開いて確認
STEP 5: GitHubにアップロード → 全ページ自動更新 ✅
```

---

## 📊 従来方式との比較

| 比較項目 | 従来方式 | コンフィグ駆動方式 |
| :--- | :---: | :---: |
| 事務所名の変更 | 6ファイル修正 | **1ファイルのみ** |
| 電話番号の変更 | 4ファイル修正 | **1ファイルのみ** |
| 料金変更 | pricing.htmlのみ | **1ファイルのみ** |
| 初心者の混乱リスク | 高い | **低い** |
| GitHubでの直接編集 | 難しい | **簡単** |

**作成日**: 2026/03/01

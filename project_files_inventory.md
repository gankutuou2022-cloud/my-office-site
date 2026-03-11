# プロジェクト管理ファイル一覧 (Project_01 & Project_02)

このファイルは、現在進行中の2つのプロジェクトに関連するドキュメントとその内容をまとめたものです。

---

## 📁 Project_01: Webサイト公開プロジェクト
GitHubとCloudflare Pagesを使用した公開手順や運用に関するドキュメント群です。

| ファイル名 | 内容・目的 |
| :--- | :--- |
| [[Project_01/beginner_manual_udemy\|beginner_manual_udemy.md]] | **完全初心者向けUdemy講座用マニュアル**<br>ITが苦手な人でもハマるポイント（Workers/Pagesの選択ミス等）を丁寧に解説したマニュアル。 |
| [[Project_01/deployment_checklist\|deployment_checklist.md]] | **公開作業チェックリスト**<br>公開時にミスがないか、各ステップで確認すべき項目をまとめたリスト。 |
| [[Project_01/deployment_flow\|deployment_flow.md]] | **サイト公開フロー図解**<br>GitHubとCloudflareがどのように連携してサイトが公開されるかの全体像を図解。 |
| [[Project_01/detailed_manual\|detailed_manual.md]] | **詳細公開手順書**<br>ある程度知識がある人向けの、無駄を省いたステップバイステップの公開ガイド。 |

---

## 📁 Project_02: サイト作成・リサーチプロジェクト
社労士向けサイトの作成、料金リサーチ、技術設計に関するドキュメント群です。

| ファイル名 | 内容・目的 |
| :--- | :--- |
| [[Project_02/config_driven_design\|config_driven_design.md]] | **コンフィグ駆動型設計書**<br>1つのファイル（config.js）を書き換えるだけでサイト全体（事務所名、料金等）が更新されるメンテ性の高い設計。 |
| [[Project_02/design_spec_v2\|design_spec_v2.md]] | **デザイン仕様書 v2（改訂版）**<br>「AI作成っぽさ」を脱却するための改訂版デザイン仕様。ネイビー×ゴールドのカラー、明朝体見出し、余白設計、NGリスト、CSS変数を含む。 |
| [[Project_02/material_review\|material_review.md]] | **既存資料レビュー・品質評価**<br>社労士向けテンプレートの設計図のレビューと、不足している実装項目の洗い出し。 |
| [[Project_02/pricing_research\|pricing_research.md]] | **社労士料金相場リサーチ**<br>顧問料、給与計算、スポット業務などの相場を、規模・課金単位・メニュー別にまとめたマトリックス。 |

---

## 🏗️ Project_02/site: Webサイト本体（実装ファイル）
実際にブラウザで表示されるWebサイトのソースコードです。

| ファイル名 | 内容・目的 |
| :--- | :--- |
| [[Project_02/site/index.html\|index.html]] | **トップページ**<br>事務所の顔となるページ。ヒーロー、強み、実績カウンター等を含む。 |
| [[Project_02/site/about.html\|about.html]] | **事務所概要**<br>代表挨拶、事務所データ、アクセスマップへの導線。 |
| [[Project_02/site/services.html\|services.html]] | **業務内容**<br>顧問契約、給与計算、助成金などの詳細なサービス紹介。 |
| [[Project_02/site/pricing.html\|pricing.html]] | **料金案内**<br>各サービスの目安価格をマトリックス形式で表示。 |
| [[Project_02/site/contact.html\|contact.html]] | **お問い合わせ**<br>電話番号、メール、Google Forms埋め込み。 |
| [[Project_02/site/privacy.html\|privacy.html]] | **プライバシーポリシー**<br>士業サイトに必須の個人情報保護方針。 |
| [[Project_02/site/js/config.js\|js/config.js]] | **一括設定ファイル**<br>事務所名、連絡先、料金、実績などの全変数を管理する単一ソース。 |
| [[Project_02/site/js/main.js\|js/main.js]] | **サイト制御スクリプト**<br>config.jsのデータをHTMLに注入し、動的な挙動を制御。 |
| [[Project_02/site/css/style.css\|css/style.css]] | **デザイン v2 スタイルシート**<br>ネイビー、ゴールド、明朝体を使用した高品質なデザイン定義。 |

---

## 🛡️ Project_02/site_harassment: ハラスメント専門講師版（別テンプレート）
講師・コンサルタント特化した別デザインバリエーションです。

| ファイル名 | 内容・目的 |
| :--- | :--- |
| [[Project_02/site_harassment/index.html\|index.html]] | **講師版トップ**<br>登壇回数や受講者数、重点テーマを前面に出した権威性重視のレイアウト。 |
| [[Project_02/site_harassment/about.html\|about.html]] | **講師プロフィール**<br>ミッション、略歴、保有資格を掲載。 |
| [[Project_02/site_harassment/seminar.html\|seminar.html]] | **研修メニュー**<br>カスハラ・パワハラ対策など、講師特化のサービス一覧。 |
| [[Project_02/site_harassment/achievements.html\|achievements.html]] | **実績・メディア**<br>登壇回数の詳細や過去の登壇先、メディア掲載履歴。 |
| [[Project_02/site_harassment/contact.html\|contact.html]] | **お問い合わせ**<br>講演依頼・コンサルティング依頼専用フォーム。 |
| [[Project_02/site_harassment/js/config.js\|js/config.js]] | **講師版設定**<br>所属名、講演実績、重点対応テーマを管理。 |
| [[Project_02/site_harassment/css/style.css\|css/style.css]] | **講師版スタイル**<br>ディープネイビー×テールの落ち着いた知的なデザイン定義。 |

---

## 📁 Archive: 元資料・バックアップ
これまでのリサーチや設計に使用した元資料を隔離して保管しています。

| ファイル名 | 内容・目的 |
| :--- | :--- |
| [[Archive/デザイン調整報告\|デザイン調整報告.md]] | AI系から個人事務所向けへのデザイン変更点詳細。 |
| [[Archive/デザインリサーチ報告書\|デザインリサーチ報告書.md]] | 市場のデザイン傾向調査結果（大手vs個人）。 |
| [[Archive/制作仕様書\|制作仕様書.md]] | Udemy講座の制作スケジュール・動画仕様。 |
| [[Archive/技術判断事項\|技術判断事項.md]] | 技術選定の根拠（HTML/CSS/JS/Google Forms）。 |
| [[Archive/社労士テンプレート完成報告\|社労士テンプレート完成報告.md]] | 初期MVP版のデザイン構成報告。 |
| [[Archive/Cloudflare_Deployment_Guide\|Cloudflare_Deployment_Guide.md]] | Cloudflare Pages公開の初期手順書。 |

---

**最終更新日**: 2026/03/01

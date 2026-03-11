/**
 * ============================================
 * 【カスタマイズ設定ファイル】
 * このファイルだけ書き換えるだけでサイト全体が更新されます。
 * ============================================
 */

const OFFICE_CONFIG = {

    // --- 基本情報 ---
    officeName: "さくら社会保険労務士事務所",
    ownerName: "佐藤 誠",
    ownerTitle: "代表 社会保険労務士",
    catchphrase: "人と企業を、信頼の絆で結ぶ。",
    subCatchphrase: "地域密着11年。複雑な労務・助成金手続きを、分かりやすくサポートします。",

    // --- 連絡先 ---
    tel: "03-1234-5678",
    fax: "03-1234-5679",
    email: "contact@sakura-sr.example.com",
    address: "〒160-0022 東京都新宿区新宿X-X-X 新宿ビジネスビル 5F",
    googleMapsUrl: "https://maps.google.com/?q=東京都新宿区新宿",
    googleFormsUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfD.../viewform?embedded=true", // サンプルID

    // --- 営業情報 ---
    businessHours: "平日 9:00〜18:00",
    holiday: "土・日・祝日",
    firstConsult: "初回相談無料（30分）",

    // --- SEO設定 ---
    siteTitle: "さくら社会保険労務士事務所 | 新宿の労務相談・給与計算・助成金",
    siteDescription: "新宿の社会保険労務士事務所。中小企業・個人事業主の方を中心に、給与計算、就業規則作成、助成金申請をサポート。初回相談は無料です。",
    siteUrl: "https://sakura-sr-office.pages.dev",

    // --- 料金設定（税込・サンプル価格）---
    pricing: {
        advisoryBasic: {
            label: "顧問契約（労務相談のみ）",
            price: "月額 22,000円〜",
            note: "従業員9名以下の事務所様",
        },
        advisoryFull: {
            label: "総合顧問（手続き代行あり）",
            price: "月額 33,000円〜",
            note: "従業員9名以下の事務所様",
        },
        payroll: {
            label: "給与計算代行（月次）",
            price: "月額 16,500円〜",
            note: "追加1名につき1,650円",
        },
        workRules: {
            label: "就業規則 新規作成",
            price: "165,000円〜",
            note: "内容によりお見積り",
        },
        subsidy: {
            label: "助成金申請代行",
            price: "成功報酬 受給額の15%",
            note: "着手金 0円（顧問先様限定あり）",
        },
    },

    // --- 実績（サンプル数値）---
    achievements: {
        clients: "45",  // 顧問先件数
        years: "11",  // 開業年数
        certificates: "120", // 累計手続き件数
    },

    // --- SNSリンク（空欄の場合は非表示） ---
    sns: {
        twitter: "",
        facebook: "",
        instagram: "",
        line: "https://line.me/R/ti/p/...", // 公式LINE
    },
};

// 外部から読み込めるように（ブラウザ環境用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OFFICE_CONFIG;
}

/**
 * ============================================
 * 【カスタマイズ設定ファイル：ハラスメント講師版】
 * ============================================
 */

const OFFICE_CONFIG = {

    // --- 基本情報 ---
    officeName: "ハラスメント対策実務研究所",
    ownerName: "高山 恵子",
    ownerTitle: "特定社会保険労務士 / ハラスメント対策コンサルタント",
    catchphrase: "その一線が、企業の未来を分ける。",
    subCatchphrase: "従業員の心理的安全性を確保し、安全配慮義務を履行する。法規制に適合した組織づくりを伴走サポートします。",

    // --- 講師実績（ハラスメント版特有） ---
    stats: {
        seminars: "850",  // 登壇回数
        trainees: "45,000", // 受講者累計
        years: "15",   // 専門キャリア年数
    },

    // --- 重点テーマ ---
    themes: [
        "カスタマーハラスメント（カスハラ）対策の義務化対応",
        "心理的安全性を高めるマネジメント研修",
        "安全配慮義務違反リスクの徹底回避",
        "ハラスメント相談窓口の外部委託・構築"
    ],

    // --- 連絡先 ---
    tel: "03-9876-5432",
    fax: "03-9876-5433",
    email: "info@harassment-lab.example.com",
    address: "〒100-0005 東京都千代田区丸の内X-X-X 第一ビジネスセンター 8F",
    googleMapsUrl: "https://maps.google.com/?q=東京都千代田区丸の内",
    googleFormsUrl: "https://docs.google.com/forms/d/e/.../viewform", // 問い合わせフォーム

    // --- 営業情報 ---
    businessHours: "平日 10:00〜17:00 (研修は土日祝も対応可)",
    holiday: "土・日・祝日",
    firstConsult: "初回オンライン相談（30分）無料",

    // --- SEO設定 ---
    siteTitle: "ハラスメント対策実務研究所 | カスハラ・パワハラ対策研修の専門家",
    siteDescription: "カスハラ対策の義務化、心理的安全性の確保、安全配慮義務への対応。延べ500回以上の登壇実績を持つ特定社労士が、コンプライアンス適合と定着率向上を支援します。",
    siteUrl: "https://harassment-expert.pages.dev",

    // --- 研修メニュー・料金（目安）---
    pricing: {
        kasuhara: {
            label: "カスハラ対策 基礎研修",
            price: "110,000円〜",
            note: "90分〜 / オンライン・対面対応",
        },
        pawahara: {
            label: "管理職向けパワハラ防止研修",
            price: "165,000円〜",
            note: "120分〜 / ワークショップ形式",
        },
        safety: {
            label: "心理的安全性向上プログラム",
            price: "330,000円〜",
            note: "連続3回セッション / 組織開発支援",
        },
        compliance: {
            label: "顧問型コンサルティング",
            price: "月額 55,000円〜",
            note: "規程整備・相談窓口・最新情報提供",
        }
    }
};

// 外部から読み込めるように
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OFFICE_CONFIG;
}

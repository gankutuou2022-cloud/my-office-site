/**
 * main.js - config.jsのデータをHTMLに反映させるスクリプト
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. config.js の値を反映
    reflectConfig();

    // 2. フォームやマップなどの特殊要素の処理
    setupSpecialElements();

    // 3. スクロール時のヘッダー制御
    setupHeaderScroll();
});

/**
 * OFFICE_CONFIG から値を取得して data-config 属性を持つ要素に反映
 */
function reflectConfig() {
    if (typeof OFFICE_CONFIG === 'undefined') return;

    // 全ての [data-config] 要素を取得
    const elements = document.querySelectorAll('[data-config]');

    elements.forEach(el => {
        const keyPath = el.getAttribute('data-config');
        const value = getNestedValue(OFFICE_CONFIG, keyPath);

        if (value !== undefined && value !== null) {
            // リンクの場合はhref、それ以外はtextContentに反映
            if (el.tagName === 'A') {
                // tel: や mailto: のプレフィックスを考慮
                const currentHref = el.getAttribute('href') || '';
                if (currentHref.startsWith('tel:')) {
                    el.href = 'tel:' + value.replace(/[^0-9]/g, '');
                } else if (currentHref.startsWith('mailto:')) {
                    el.href = 'mailto:' + value;
                } else if (keyPath.includes('Url')) {
                    el.href = value;
                } else {
                    el.textContent = value;
                }
            } else {
                el.textContent = value;
            }
        }
    });

    // タイトルの設定
    if (OFFICE_CONFIG.siteTitle) {
        document.title = OFFICE_CONFIG.siteTitle;
    }
}

/**
 * 特殊な要素（iframe等）の動的生成
 */
function setupSpecialElements() {
    // Google Forms 埋め込み
    const formContainer = document.getElementById('google-form-container');
    if (formContainer && OFFICE_CONFIG.googleFormsUrl) {
        formContainer.innerHTML = `
      <div class="form-wrapper">
        <iframe 
          src="${OFFICE_CONFIG.googleFormsUrl}" 
          width="100%" 
          height="800" 
          frameborder="0" 
          marginheight="0" 
          marginwidth="0">読み込んでいます…</iframe>
      </div>
    `;
    }

    // SNSリンクの表示・非表示
    const snsContainer = document.querySelector('.sns-links');
    if (snsContainer) {
        Object.keys(OFFICE_CONFIG.sns).forEach(key => {
            const link = snsContainer.querySelector(`.sns-${key}`);
            if (link) {
                if (OFFICE_CONFIG.sns[key]) {
                    link.href = OFFICE_CONFIG.sns[key];
                    link.style.display = 'inline-flex';
                } else {
                    link.style.display = 'none';
                }
            }
        });
    }
}

/**
 * 階層構造のオブジェクトから値を取得 (例: "pricing.advisoryBasic.price")
 */
function getNestedValue(obj, path) {
    return path.split('.').reduce((prev, curr) => {
        return prev ? prev[curr] : undefined;
    }, obj);
}

/**
 * スクロール時にヘッダーにクラスを付与
 */
function setupHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    });
}

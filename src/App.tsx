import React, { useEffect } from 'react';
import Head from 'next/head'; // Nếu dùng React thuần, hãy thay bằng react-helmet-async

/**
 * Interface định nghĩa cấu hình toàn cục từ WordPress
 */
interface WpSettings {
  wc_add_to_cart_params: {
    ajax_url: string;
    wc_ajax_url: string;
    i18n_view_cart: string;
    cart_url: string;
    is_cart: string;
    cart_redirect_after_add: string;
  };
}

declare global {
  interface Window extends WpSettings {}
}

const CafeNgonApp: React.FC = () => {
  
  useEffect(() => {
    // 1. Logic khởi tạo giao diện giống mã gốc
    document.documentElement.className += ' yes-js js_active js';

    // 2. Cấu hình giả lập các biến WooCommerce
    window.wc_add_to_cart_params = {
      ajax_url: "/wp-admin/admin-ajax.php",
      wc_ajax_url: "/?wc-ajax=%%endpoint%%",
      i18n_view_cart: "Xem giỏ hàng",
      cart_url: "https://cafengon.monamedia.net/gio-hang/",
      is_cart: "",
      cart_redirect_after_add: "no"
    };

    console.log("Cà Phê Ngon App đã sẵn sàng!");
  }, []);

  return (
    <div className="cafe-ngon-container">
      {/* QUẢN LÝ THẺ HEAD & METADATA */}
      <Head>
        <title>Cà Phê Ngon - Hương Vị Đậm Đà</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="max-image-preview:large" />
        
        {/* DNS Prefetch & External Fonts */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Manrope:100,300,400,500,600,700&display=swap" rel="stylesheet" />

        {/* Các CSS Plugin quan trọng từ source gốc */}
        <link rel="stylesheet" href="https://cafengon.monamedia.net/wp-content/plugins/woocommerce/assets/css/woocommerce.css" />
        
        {/* NHÚNG CSS VARIABLES & STYLE GỐC */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            /* Palette màu nâu đặc trưng của quán */
            --bzo-main-color: #6f4323;
            --bzo-main-color-mix-black: rgba(56, 34, 18, 1);
            --bzo-main-color-mix-white: rgba(205, 189, 178, 1);
            --bzo-gray-color: #454545;
            --bzo-body-background: #ffffff;
            --bzo-container-width: 1560px;
            --bzo-body_typo-font-family: 'Manrope', sans-serif;
            --bzo-body_typo-font-size: 16px;
            --bzo-body_typo-line-height: 24px;
            --bzo-body_typo-color: #333333;
          }

          body {
            font-family: var(--bzo-body_typo-font-family);
            background-color: var(--bzo-body-background);
            color: var(--bzo-body_typo-color);
            margin: 0;
          }

          .wp-emoji {
            display: inline !important;
            border: none !important;
            box-shadow: none !important;
            height: 1em !important;
            width: 1em !important;
            vertical-align: -0.1em !important;
          }

          .btn-primary {
            background-color: var(--bzo-main-color);
            color: #fff;
            padding: 10px 20px;
            border-radius: 16px;
            text-decoration: none;
            display: inline-block;
            transition: 0.3s;
          }

          .btn-primary:hover {
            background-color: var(--bzo-main-color-mix-black);
          }
        `}} />
      </Head>

      {/* GIAO DIỆN CHÍNH */}
      <header className="header" style={{ padding: '20px', borderBottom: '1px solid #d9d9d9' }}>
        <div className="container" style={{ maxWidth: 'var(--bzo-container-width)', margin: '0 auto' }}>
          <h1 style={{ color: 'var(--bzo-main-color)', fontSize: '24px' }}>CÀ PHÊ NGON</h1>
        </div>
      </header>

      <main className="main-content" style={{ padding: '50px 20px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2>Chào mừng bạn đến với không gian Cà Phê Ngon ☕</h2>
          <p>Trang web đang được chuyển đổi sang nền tảng React + TypeScript hiện đại.</p>
          
          <div style={{ marginTop: '30px' }}>
            <a href="#" className="btn-primary">
              Xem sản phẩm ngay
            </a>
          </div>
        </div>
      </main>

      <footer style={{ backgroundColor: '#f4f4f4', padding: '30px', marginTop: '50px' }}>
        <div className="container" style={{ textAlign: 'center', fontSize: '14px', color: '#666' }}>
          © {new Date().getFullYear()} Cà Phê Ngon. All rights reserved.
          <br />
          Thiết kế bởi Mona Media (Bản TSX Optimized)
        </div>
      </footer>
    </div>
  );
};

export default CafeNgonApp;
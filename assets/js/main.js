// DOMの読み込み完了を待つ
document.addEventListener('DOMContentLoaded', () => {
    // ナビゲーションのアクティブ状態の管理
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // モバイルメニューの制御
    const createMobileMenu = () => {
        const header = document.querySelector('.site-header');
        const nav = document.querySelector('.main-nav');
        
        // モバイルメニューボタンの作成
        const menuButton = document.createElement('button');
        menuButton.classList.add('mobile-menu-button');
        menuButton.innerHTML = '☰';
        header.insertBefore(menuButton, nav);

        // クリックイベントの追加
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuButton.classList.toggle('active');
        });
    };

    // ウィンドウサイズが768px以下の場合にモバイルメニューを有効化
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }

    // ウィンドウリサイズ時の処理
    window.addEventListener('resize', () => {
        const mobileButton = document.querySelector('.mobile-menu-button');
        if (window.innerWidth <= 768 && !mobileButton) {
            createMobileMenu();
        } else if (window.innerWidth > 768 && mobileButton) {
            mobileButton.remove();
            document.querySelector('.main-nav').classList.remove('active');
        }
    });
}); 
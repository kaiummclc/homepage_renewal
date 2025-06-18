// ページが読み込まれたら実行
document.addEventListener('DOMContentLoaded', function() {
    
    // 「上に戻る」ボタンの要素を取得
    const backToTopButton = document.getElementById('back-to-top');

    // スクロールイベントを監視
    window.addEventListener('scroll', function() {
        // ページのスクロール量が300pxを超えたらボタンを表示、それ以外は非表示
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

});

const swiper = new Swiper('.swiper',{
    //オプションの設定
    loop: true, //最後までスライドしたら最初の画面に戻る
    
    //ページネーション表示の設定
    pagination: {
        el: '.swiper-pagination', //ページネーションの要素
    },
    
    //ナビゲーションボタンの表示の設定
    navigation: {
        nextEl: '.swiper-button-next', //次へボタンの要素の指定
        prevEl: '.swiper-button-prev', //前へボタンの要素の指定
    }
});

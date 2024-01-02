$(function () {
    // $(".openbtn").click(function () {
    //     $(this).toggleClass('active');
    //     $(".nav").toggleClass('active');
    // });

    // $('a[href*="#"]').on('click', function () {
    //     $('#js-hamburger').removeClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    //   $('#js-nav').removeClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
    // });

    const ham = $('#js-hamburger');
    const nav = $('#js_nav');
    ham.on('click', function () { //ハンバーガーメニューをクリックしたら
        ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
        nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外
        $('body').toggleClass('scroll_non')
    })

    ham.on('click', function () { //ハンバーガーメニューをクリックしたら
        $(".know_wrap").toggleClass('slider');
    })



    // $("#js-hamburger").on('click', function () { //ハンバーガーメニューをクリックしたら
    //     $(".nav").fadeToggle(1000);
    // })

    // const ham = $('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
    // const nav = $('#js-nav'); //js-navの要素を取得し、変数navに格納
    // ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    //     console.log("ok!"); //コンソール画面でokというメッセージが出る
    // })
})

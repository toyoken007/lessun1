$(function () {
  $("#slider").slick({
    arrows: false,/*矢印有無*/
    dots: false,/*ドット有無*/
    autoplay: true,
    autoplayspeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    fade: true,
    speed: 3000

  });

  const slid_sp = function () {
    console.log("ppppp");
    $(".slid").slick({
      arrows: true,
      dots: true,/*ドット有無*/
      autoplay: false,
      adaptiveHeight: true,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 768, // 399px以下のサイズに適用
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  $(window).on('load resize', function () {
    if (window.outerWidth <= 768) {
      slid_sp()
      // console.log("aaa");
    }
  })

});
    // $('#slid').slick({
    //   arrows: false,
    //   dots: false,/*ドット有無*/
    //   autoplay: false,
    //   adaptiveHeight: true,
    //   centerMode: false,
    //   centerPadding: '60px',
    //   slidesToShow: 4,
    //   responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         arrows: false,
    //         // centerMode: true,
    //         // centerPadding: '40px',
    //         slidesToShow: 1
    //       }
    //     },
    //   ]
    // });

    


// const CHANGE_WIDTH = 600; // 変更を検知する横幅
// const ADD_CLASS = "sp-change" // 追加するクラス

// $(window).on('load resize', function(){
//   var i_width = $(window).outerWidth(true);
//   if(i_width > CHANGE_WIDTH){
//     if($('body').hasClass(ADD_CLASS)){
//       $('body').eq(0).removeClass(ADD_CLASS);
//     }
//   } else {
//     if(!$('body').hasClass(ADD_CLASS)){
//       $('body').eq(0).addClass(ADD_CLASS);
//     }
//   }
// });


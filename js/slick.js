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

    
    $("#slid").slick({
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

    
});
window.addEventListener('resize', function(){
  if(window.innerWidth >= 768){
    // $('#colorBox').addClass('redbox');
    console.log("aaa");
  } else {
    // $('#colorBox').removeClass('bluebox');
    console.log("mmm");
  }
})

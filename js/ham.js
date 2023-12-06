$(".openbtn").click(function () {
	$(this).toggleClass('active');
	$(".nav").toggleClass('active');
});

$('a[href*="#"]').on('click', function () {
	$('#js-hamburger').removeClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  $('#js-nav').removeClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
});
$(document).ready(function(){
		var cnt = 0;
		$('.tab_con').hide().eq(0).show();
		$('.tab_menu li').click(function() {
			cnt = $(this).index();
			var select = $(this).text();
			$('.tab_menu li').removeClass('on').eq(cnt).addClass('on');
			$('.tab_con').hide().eq(cnt).fadeIn();
			$('.tab_tit').children('.select').text(select);
			$('.tab_menu').removeClass('on');
		});

		$('.tab_tit').click(function(){
			$('.tab_menu').toggleClass('on');
		});

		var slick_slider = $('.tab_slider').slick({
		dots: false,
		arrows: true,
		speed:900, 
		cssEase: 'linear',
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.prev01'),
		nextArrow: $('.next01')
	});

	$(".tab_menu li").on('click', function(e) {
		e.preventDefault();
		slick_slider.slick('refresh');
	});
	
});
$('.carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
(new WOW).init();
var nav = (function (){
	var returned = {};

	function setUpListeners () {
		$('.nav__trigger').on('click touch',function (event){
			event.preventDefault();
			$(this.parentNode).toggleClass('nav_opened');

		})
		$('.nav__link').on('click touch',function (event){
			event.preventDefault();
			var top = $(this.hash).offset().top;
			$('body').animate({scrollTop: top-35},1000);
			$('.nav__trigger').click();

		})
		$(window).on('scroll resize',function (event) {
			var header = $('.header__bottom'),
				headerHeight =  $('.header__top').height(),
				scrollTop = $('body').scrollTop();

			if(scrollTop < headerHeight){
				header.css('top', headerHeight-scrollTop+10)
				header.removeClass('header__bottom_small');
			}else{
				header.addClass('header__bottom_small');
				header.css('top', 0);
			}
		});
		$(document).ready(function (event) {
			var header = $('.header__bottom'),
				headerHeight =  $('.header__top').height(),
				scrollTop = $('body').scrollTop();

			if(scrollTop < headerHeight){
				header.css('top', headerHeight-scrollTop+10);
				header.removeClass('header__bottom_small');
			}else{
				header.addClass('header__bottom_small');
				header.css('top', 0);
			}
		});
	}

	returned.init = function (){
		setUpListeners();
	}

	return returned;
})();
nav.init();


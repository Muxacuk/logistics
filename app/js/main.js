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
		$(window).on('scroll',function (event) {
			if($('body').scrollTop() < 100){
				$('.header__bottom').css('position','static');
			}else{
				$('.header__bottom').css('position','fixed');
			}
		});
		$(document).ready(function (event) {
			console.log('ready');
			if($('body').scrollTop() < 100){
				$('.header__bottom').css('position','static');
			}else{
				$('.header__bottom').css('position','fixed');
			}
		});
	}

	returned.init = function (){
		setUpListeners();
	}

	return returned;
})();
nav.init();


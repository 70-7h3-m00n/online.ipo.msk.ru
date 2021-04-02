$(document).ready(function() {

	/*работа фиксированного хедера*/
	$(window).scroll(function(){
		if ($(this).scrollTop() > 120){
			$("header").addClass('fixedtop');
		}
		else{
			$("header").removeClass('fixedtop');
		}
	});

	$(".scroll-anchor a").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top - 60;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
		return false;
	});

	// работа мобильного меню
	$(".mobile-buter").click(function () {
		$(".mobile-overlay").fadeIn(300);
		$(".header-mobile").fadeIn(300);
	});

	$(".mobile-overlay, .header-mobile-close, .mobile-header-menu a").click(function () {
		$(".mobile-overlay").fadeOut(300);
		$(".header-mobile").fadeOut(300);
	});

	// Модалка, галерея
	if($('[data-fancybox]').length){
		$("[data-fancybox]:not(.slick-cloned)").fancybox({
			loop: true,
			transitionEffect: "tube",
			hash: false,
			backFocus : false
		});
	}

});


var menu_selector = ".header-menu"; 
function onScroll(){
	var scroll_top = $(document).scrollTop() + 100;
	$(menu_selector + " a").each(function(){
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + " a.active").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}

$(document).ready(function () {
	$(document).on("scroll", onScroll);
});

/*анимации*/
wow = new WOW(
	{
		mobile: false,       
	}
)
wow.init();

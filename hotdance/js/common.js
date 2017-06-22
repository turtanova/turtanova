$(document).ready(function(){

	function wResize() {
		$('header').css('min-height', $(window).height());
		//$('.bg-slider').css('min-height', $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});

	$('.popup').magnificPopup({type: "image"});
	$('.popup-c').magnificPopup();

	$.stellar({
  		responsive: true,
  		horizontalOffset: 50,
  		verticalOffset: 120
	});

	$(".slider").owlCarousel({
		loop:true,
    	nav:true,
    	autoplay: false,
    	autoplaySpeed: 1000,
    	responsive:{
        0:{
            items:1
        	}
    	},
    	navText: ""
	});


	$(".head-phone .tab").click(function() {
		$(".head-phone .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$(".head-cont_tabs .tab2").click(function() {
		$(".head-cont_tabs .tab2").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-item2").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$(".tab-geo .tab3").click(function() {
		$(".tab-geo .tab3").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-item3").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$(".ftr-tabs .tab-4").click(function() {
		$(".ftr-tabs .tab-4").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-item-4").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$('.header-cont').animated('fadeInDown', 'fadeOut');
	$('.head-cont_tabs').animated('flipInY', 'fadeOut');
	$('.pf-item').animated('fadeInRight', 'fadeOut');
	//$('.pf-form').animated('zoomInRight', 'fadeOut');
});


	
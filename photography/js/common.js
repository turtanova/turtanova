$(document).ready(function(){
  $(".slider-rv").owlCarousel({
  	//animateOut: 'zoomOut',
    //animateIn: 'zoomIn',
    items:1,
    margin:10,
    stagePadding:10,
    smartSpeed:450,
    autoplay:true,
    autoplayTimeout:5000,
    loop:true,
    autoHeight:true
  });

   $(".gallary-slider").owlCarousel({
   	animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    margin:20,
    stagePadding:10,
   	smartSpeed:450,
    URLhashListener:true,
    autoplayHoverPause: false,
    autoplay:false,
  	startPosition: 'URLHash',
   	loop: false,
   	autoHeight:true
  });

	/*$("[data-fancybox]").fancybox({
		speed : 330,
		image : {
		protect : true
		}	
	});*/

	$(window).scroll(function() {

		if ($(document).scrollTop() > 700) {
			
			$('.header-nav').addClass('header-fixed').addClass('animated fadeIn');
		} else if ($("body").scrollTop() <= 700) {
			$('.header-nav').removeClass('header-fixed').removeClass('animated fadeIn');
		}

	});

	 $(".header-nav .menu a").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });

});
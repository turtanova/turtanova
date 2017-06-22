$(document).ready(function(){

  $('.bg-slider-row').bxSlider({
  	pagerCustom: '.bg-slider__pager',
  	controls:false,
  	//auto: true,
  	mode: 'fade'
  });

  $('.product-item__slider').bxSlider({
  	controls:false,
  	pagerCustom: '.product-item__pager',
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 90
  });

  $('.sizes-list li ').click(function() {
  		$(this).siblings().removeClass('active');
  		$(this).addClass('active');
  });

  $('.toggle-menu').click(function() {
    $('.header-nav').slideToggle();
    $(this).toggleClass('active');
  });

  // Product more 


  $('.product-item__more-load').click(function() {

    $('.product-item-wrap.hidden').toggleClass('active');
  });

 
});
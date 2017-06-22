$(document).ready(function(){

// Адаптивный слайдер новоси

  $('.slider-news').slick({
     
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
      },
     {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// The end Адаптивные слайдер новости

// BIG - Слайдер "Проекты домов из кирпича"

 $('.bg-slider').slick({
     
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
});

// The end BIG - Слайдер "Проекты домов из кирпича"

// Menu  

  $(".icon-menu").click(function() {
      $('nav').addClass('active');
  });


  function resizeScrenn(){

    if ($(window).width() <= 768) {
      $(".dropdown").unbind("click").bind('click', function(e) {
        e.preventDefault();
        if(!$(this).hasClass('active')) {
          $('.dropdown').removeClass('active').children('.submenu').slideUp(200);
          $(this).addClass('active');
          $(this).children('.submenu').slideDown(200);
        } else {
          $(this).removeClass('active').children('.submenu').slideUp(200);
        }
     });
      
    }  else if ($(window).width() > 768) {
       $(".dropdown").unbind('click');
    }

  }  resizeScrenn();
      
  $(window).resize(function(){
    resizeScrenn();
  });
   

// The end menu


// Обратный звонок

  $('.callback').click(function() {
    $('.black-fade').addClass('fade-in');
    $('.form-wrap').addClass('active');
  });

// The end Обратный звонок 

// Кнопка закрытия // форма отправки 

  $('.close').click(function() {
    $('.black-fade').removeClass('fade-in');
    $('.form-wrap').removeClass('active');
    $('nav').removeClass('active');
  });

  $('.black-fade').click(function() {
    $(this).removeClass('fade-in');
    $('.form-wrap').removeClass('active');
  });

// The end Кнопка закрытия 


// Плавно появляющийся контент при скролле

  $('.post').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: 100
  });


// Selectric 

  $('select').selectric();
  
//......................

$( '.header' ).fixedsticky();

});
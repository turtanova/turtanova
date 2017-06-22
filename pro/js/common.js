$(document).ready(function(){

  $('.clients-slider__list').slick({
      dots: true,
      //infinite: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 2,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
          {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
      },
     {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


  $('.sizes-list li ').click(function() {
  		$(this).siblings().removeClass('active');
  		$(this).addClass('active');
  });

//  =============  Menu  ======================  //

  $('.toggle-menu').click(function() {
    $('.header-menu').fadeToggle();
    $(this).toggleClass('active');
  });

   setInterval(function(){ 
//находим теги img и ставим атрибуты    
    $('img').attr({
       "ondrag":"return false",
       "ondragdrop":"return false",
       "ondragstart":"return false"
    });
//выполняем каждые 0,3 сек
}, 300);


//Счетчик цифр

    var show = true;
    var countbox = $('.are-proud');
      $(window).on("scroll load resize", function(){
   
          if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
   
          var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
          var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
   
          var w_height = $(window).height();        // Высота окна браузера
          var d_height = $(document).height();      // Высота всего документа
   
          var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
   
          if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
              $(".result-item__num").spincrement({
                  thousandSeparator: "",
                  duration: 2000
              });
   
              show = false;
          }
    });

  // End счетчик цифр

  // Progress bar 


  var showBar = true;
    var countBar = $('.skills');
      $(window).on("scroll load resize", function(){
   
          if(!showBar) return false;                   // Отменяем показ анимации, если она уже была выполнена
   
          var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
          var e_top = $(countBar).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
   
          var w_height = $(window).height();        // Высота окна браузера
          var d_height = $(document).height();      // Высота всего документа
   
          var e_height = $(countBar).outerHeight(); // Полная высота блока со счетчиками
   
          if(w_top + 300 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
              $('.second.circle').circleProgress({
                  value: 0.8,
                  size: 144,
                  thickness: 6,
                  emptyFill: '#fff',
                  fill: {color: '#008b8b'}
                }).on('circle-animation-progress', function(event, progress) {
                  $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
                });

                $('.second.circle.circle2').circleProgress({
                  value: 0.7
                }).on('circle-animation-progress', function(event, progress) {
                  $(this).find('strong').html(Math.round(84 * progress) + '<i>%</i>');
                });

                $('.second.circle.circle3').circleProgress({
                  value: 1
                }).on('circle-animation-progress', function(event, progress) {
                  $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
                });

                $('.second.circle.circle4').circleProgress({
                  value: 0.9
                }).on('circle-animation-progress', function(event, progress) {
                  $(this).find('strong').html(Math.round(94 * progress) + '<i>%</i>');
                });
                 
              showBar = false;
          }
    });
  

  //End Progress bar

  // ФИЛЬТР КАРТИНОК 

  $('.works-item:gt(11)').addClass('height');

  $('.filter').click(function(){
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
  });

   $(".works-box").mixItUp({
    
    selectors: {
      target:'.works-item',
      filter:'.filter'
      //:'.sort'
    },
    load: {
      filter:'all',
      sort:'myorder:desc'
    },
    
    controls: {
      enable:true,
      activeClass:'on'
    },
    
    animation: {
      enable:true,
      effects:'scale fade',
      duration:200
    },
    
    /*layout: {
      //display:'block'
      containerClass:'list'
    }*/
    
    callbacks: {
      /*onMixLoad:function(state) {
        alert('Load');
      },*/
    /*  onMixStart:function(state) {
        alert(state.$targets.text());
      },
      /*onMixEnd:function() {
        alert('End');
      }*/
    }
    
    
  });
  // END ФИЛЬТР КАРТИНОК 

  // Плавный скролл при клике по меню 

  var menuSelector = '.menu'; 


  function onScroll(){
      var scrollTop = $(document).scrollTop();
      $(menuSelector + " a").each(function(){
          var hash = $(this).attr("href");
          var target = $(hash);
          
          if (target.position().top <= scrollTop + 300 && target.position().top + target.outerHeight() > scrollTop) {
              $(menuSelector + " a.active").removeClass("active");
              $(this).addClass("active");
          } 
          else {
              $(this).removeClass("active");
          }
      });
  }

  $(document).on("scroll", onScroll);
 
    $("a[href^=#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menuSelector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
    });
  // Плавный скролл при клике по меню 

});



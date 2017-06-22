$(function() {
    
    
    var lastScrollTop = 0;
    var wh = $(window).outerHeight();
   
   
    $(window).scroll(function(event){
   var st = $(this).scrollTop();     
   var top_menu = $('.top_menu'),
   wrap_top_menu = $('.wrap_top_menu'),
   block_1 = $('.block_1'),
   wrap_block_1 = $('.wrap_block_1'),
   wrap_block_1 = $('.wrap_block_1'),
   auth_reg_block = $('.auth_reg_block'),
   wrap_auth_reg_block = $('.wrap_auth_reg_block'),
   backout = $('.backout'),
   gray_block = $('.gray_block'),
   wrap_gray_block = $('.wrap_gray_block'),
   menu_mobile_phone = $('.menu_mobile_phone'),
   wrapper_full = $('.wrapper.full');
   
   
   
   


  
  /* block_1 start*/
    //if (st >= top_menu.outerHeight()) {
    if (st > 0) {
      wrap_top_menu.addClass('fixed');  
      wrap_block_1.addClass('fixed');
      wrap_auth_reg_block.addClass('fixed');
      backout.addClass('fixed');
 
      wrap_gray_block.addClass('fixed');
      wrap_gray_block.addClass('unvis');
      wrap_gray_block.addClass('pos_0');
      
     // wrapper_full.css('padding-top', wrapper_full.outerHeight() + block_1.outerHeight() + gray_block.outerHeight()  + 'px');
      wrapper_full.addClass('step_1');
      
      wrap_top_menu.addClass('unvis');
     
      wrap_block_1.addClass('pos_0');
      backout.addClass('pos_0');
      
     
      
      
  }
  else {
      wrap_top_menu.removeClass('fixed'); 
      wrap_block_1.removeClass('fixed');
      wrap_auth_reg_block.removeClass('fixed'); 
      backout.removeClass('fixed'); 
      
      wrap_gray_block.removeClass('fixed');
      wrap_gray_block.removeClass('unvis');
      wrap_gray_block.removeClass('pos_0');
      
      wrapper_full.removeClass('step_1');

      wrap_top_menu.removeClass('unvis');
  
      wrap_block_1.removeClass('pos_0');
      backout.removeClass('pos_0');
      
      
      
     
      
  }
  
  
   
       if (st > lastScrollTop){
       // downscroll code
            } else {
                
      wrap_gray_block.removeClass('unvis');
   // wrap_gray_block.removeClass('pos_0');
   // wrap_top_menu.removeClass('unvis');
   // wrap_block_1.removeClass('pos_0');
   // backout.removeClass('pos_0');
         
                
      // upscroll code
   }
   /* block_1 end */
   
   lastScrollTop = st;

  
  
});


$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
   } else {
      // upscroll code
   }
   lastScrollTop = st;
});

  
  
 
  

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
    $('.mega_menu > li > ul .width_1').css('height',$(window).outerHeight() - 100 + 'px');

  if($(window).outerWidth() >= 950 && $(window).outerHeight() <=600 ) {
     $('.mega_menu > li > ul .width_1').css('height',$(window).outerHeight() - 100 + 'px');
  }
  
  if($(window).outerWidth() >= 950 && $(window).outerHeight() >=600 ) {
      $('.mega_menu > li > ul .width_1').css('height','auto'); 
  }
  
    
  
});


$(window).resize(function(){
      $('.mega_menu > li > ul .width_1').css('height',$(window).outerHeight() - 100 + 'px');

     if($(window).outerWidth() >= 950 && $(window).outerHeight() <=600 ) {
     $('.mega_menu > li > ul .width_1').css('height',$(window).outerHeight() - 100 + 'px');
  }
  
  if($(window).outerWidth() >= 950 && $(window).outerHeight() >=600 ) {
      $('.mega_menu > li > ul .width_1').css('height','auto'); 
  }
  
});

  
  /**/


    
      
     
     
    
    
    $(".radio_number input[type='radio']").click(function()
{
  var previousValue = $(this).attr('previousValue');
  var name = $(this).attr('name');

  if (previousValue == 'checked')
  {
    $(this).removeAttr('checked');
    $(this).attr('previousValue', false);
  }
  else
  {
    $(".radio_number  input[name="+name+"]:radio").attr('previousValue', false);
    $(this).attr('previousValue', 'checked');
  }
    });


    

	// styler
	$('select').styler();
	
	// datepicker
     
	$( "#datepicker" ).datepicker({
        	
         beforeShow : function(){
           if(!$('.datepicker_wrapper').length){
                  $('#ui-datepicker-div').wrap('<span class="datepicker_wrapper"></span>');
            }
            $('.label_datepicker').addClass('cselect'); 
        },        
     
         onClose: function (dateText, inst) {
        var date = $(this).val();
        $("#datepicker").val(date.toString());
        $('.label_datepicker').removeClass('cselect');     
        }
	}).datepicker("setDate", new Date());
	
	
    // search

        
        var searchBox = function(direction) {
       
       // Set the effect type
    var effect = 'slide';

    // Set the options for the effect type chosen
    var options = { direction: direction };

    // Set the duration (default: 400 milliseconds)
    var duration = 400;

    $('.search_block').toggle(effect, options, duration);
    $('.search_block').toggleClass('show_search_block');
	
        }

        $('.js_search_button').click(function() {
            
  
            
         
           if(!$('.search_block').hasClass('show_search_block')) {
               searchBox('right')
          }   
        });
        
        $(document).mouseup(function (e) {
                
        var container = $(".search_block, .search_btn");
       
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
        if($('.search_block').hasClass('show_search_block')) {
             searchBox('left')
          }   

        }
    });
     
	
        // search end
        
	// slick
	$('.js_slick_slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
  		slidesToScroll: 1,
                adaptiveHeight: true,
                
		responsive: [
			{
				breakpoint: 1439,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 670,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 640,
				settings: {
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 3,
					verticalSwiping: false,
					vertical: true
					
				}
			}
		]
	});
        
     	$('.mp_items_out.one .double_prev').click(function(){
    $('.mp_items_out.one .js_slick_slider').slick('slickPrev');
	return false;
	});
	$('.mp_items_out.one .double_next').click(function(){
    $('.mp_items_out.one .js_slick_slider').slick('slickNext');
	return false;
	});
        
        $('.mp_items_out.two .double_prev').click(function(){
    $('.mp_items_out.two .js_slick_slider').slick('slickPrev');
	return false;
	});
	$('.mp_items_out.two .double_next').click(function(){
    $('.mp_items_out.two .js_slick_slider').slick('slickNext');
	return false;
	});
        
	
	//#start сообщения внизу страницы
        
        var mesBox = function() {
             $('.message_send_block').each(function() {
            $(this).css({'bottom': '-'+$(this).outerHeight()+'px'} );
            
            
              if($(this).outerHeight() >= $(window).height()) {
                $(this).addClass('scroll');
                } else {
                $(this).removeClass('scroll');  
                }
   
        })
            
        };
        
        var closeMesBox = function() {
            
                 $('.message_send_block').each(function() {
            var mh = $(this).outerHeight();
            $(this).animate({'bottom': '-'+mh+'px'} ,{
                complete:function() {
                $('.fixed_btn a').show()    
                }
            }, 300 );
           
   
        })

            
        }
        
       mesBox(); 
        
        $(window).on('resize', function() {
            
             $('.message_send_block').each(function() {
               if($(this).outerHeight() >= $(window).height()) {
                $(this).addClass('scroll');
                } else {
                $(this).removeClass('scroll');  
                }
        }) 
                   
        })
	
	$('.js_message').on('click',function(){
		$('.js_message').css('display', 'block');
		$(this).css('display', 'none');
                var elem = $(this).attr('href');
                var mesb = $('#message_send_block').outerHeight();
                var sb = $('#subscribe_block').outerHeight();
                if(elem == '#subscribe_block') {
       		$('#message_send_block').animate({bottom:'-'+mesb+'px'} , 500);
                }
                if(elem == '#message_send_block') {
       		$('#subscribe_block').animate({bottom:'-'+sb+'px'} , 500);
                }
		$(elem).show().animate({bottom:'0'},500);
                
		return false;
	});
	
	$('.message_close').on('click', function(){
		$('.js_message').css('display', 'block');
                var hpar =  $(this).parent().outerHeight(); 
		$(this).parent().animate({bottom:'-'+hpar+'px'},300);
	});
        
        
        
          $(document).mouseup(function (e)
    {
        var container = $('.message_send_block, .fixed_btn ');

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            
       closeMesBox()
           
        } 
    }); 
    
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
       closeMesBox()  
       }
   });
    
    //end #########сообщения внизу страницы
	
	// кнопка фильтра
	
	$('.show_hide_filtr').click(function() {
		$('.gray_block').slideToggle(function() {
			if($(this).is(":hidden")) {
				$('.show_hide_filtr').text('Показать фильтр');
			}
			if($(this).is(":visible")) {
				$('.show_hide_filtr').text('Скрыть фильтр');
			}
		});
		
	});
        
            $(document).mouseup(function (e)
    {
        var container = $(".gray_block, .show_hide_filtr, .mega_menu > li, .datepicker_wrapper ");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            
            if($('.show_hide_filtr').is(':visible')) {
                $('.gray_block').slideUp();
            $('.show_hide_filtr').text('Показать фильтр'); 
                    }
           
           
        }
    });
	
	
	// высота блока
	

        
        /*****start*** */
         $('.link_1').on('click',function() {
              $('.wrap_auth_reg_block').slideDown();
              var h_block_2 = $('.wrap_auth_reg_block').innerHeight();
             // $(window).scrollTop(1);
             return false;
          })
          
          $('.wrap_auth_reg_block .btn_1.show_640').on('click',function() {
              $(".wrap_auth_reg_block").slideUp()
          })
              $(document).mouseup(function (e)
    {
        var container = $(".wrap_auth_reg_block");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.slideUp();
        }
    });
    
       $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
        $(".wrap_auth_reg_block").slideUp();
       }
   });
    /****end**** */

	
        
	setTimeout(function() {
		$('.gray_select_style.width_4.jq-selectbox').change(function() {
			var zz = $(this).find('.jq-selectbox__select-text').text();
			$(this).find('.jq-selectbox__select').attr("id", zz);
			$('.gray_select_style.width_4 .jq-selectbox__select-text').text('Цвет')
		});     
	},100);
        
        $('.gray_select_style.width_4 .jq-selectbox__select-text').text('Цвет')
        $('.gray_select_style.width_4 ul li').each(function(i) {
		$(this).attr('class', 'inc_' + i )    
         	//console.log(i)
		});   
       
       
       
       
       //.mega_menu  
       var dtclick = function() {
           
           
       
       if ($('.mega_menu  .tab-content').css('z-index') == '2') {
           
       
       	$('.mega_menu > li > a').unbind('click').bind('click',function(){
               
		var tab_id = $(this).parent().attr('data-tab');
               

		$('.mega_menu > li').not($(this).parent()).removeClass('current');
		$('.mega_menu > li > ul').not($("#"+tab_id)).removeClass('current');

		$(this).parent().toggleClass('current');
		$("#"+tab_id).toggleClass('current');
                
                return false;
	})
        
        
            	$('.mega_menu > li > ul .h3').unbind('click').bind('click',function(){
               
		var tbt_id = $(this).attr('data-tbt');

		$('.mega_menu__column ul').not($("#"+tbt_id)).removeClass('tbtcur');
		$('.mega_menu > li > ul .h3').not($(this)).removeClass('tbtcur');

		$("#"+tbt_id).toggleClass('tbtcur');
                $(this).toggleClass('tbtcur');  
                
                return false;
                })
                } else {
                    
                  $('.mega_menu > li .tab-content').removeClass('current');  
                  $('.mega_menu > li').removeClass('current')
                } 
                
          }
          
          dtclick();
          $(window).on('resize',function() {
		dtclick();
	}) ;
        
        
        
        var tzC =  function() {
           
            $('.phone_number').click(function() {
                
             $(window).scrollTop(1);   
                
             $('.menu_mobile_phone').stop().slideToggle()
              
            })
       
            }
         tzC();
        
         
         
          $(document).mouseup(function (e)
    {
        var container = $(".menu_mobile_phone, .phone_number");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.removeClass('vibible');
            $('.menu_mobile_phone').slideUp()
        }
    });
    
    
          $(document).mouseup(function (e)
    {
        var container = $(".mega_menu > li");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.removeClass('current');
            $('.mega_menu  .tab-content').removeClass('current');
        }
    });
    
    
     // mask
    $('.for_mask').mask('+7 (000) 000-00-00');
         
     
    
    $(".link_personal").on('click',function(){
  $(this).next(".personal_menu").slideToggle();
  $('#basket_tmd').slideUp();
  return false;
});
$(".link_basket_tmd").click(function(){   
  $(this).next("#basket_tmd").slideToggle();
  $('.personal_menu').slideUp();
   return false;
});

jQuery(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var box = $(".personal_menu, .basket_name"); // тут указываем ID элемента
    if (!box.is(e.target) // если клик был не по нашему блоку
        && box.has(e.target).length === 0) { // и не по его дочерним элементам
      $(".personal_menu").slideUp(); // скрываем его

    }
  });
})

jQuery(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var box = $("#basket_tmd, .link_basket_tmd"); // тут указываем ID элемента
    if (!box.is(e.target) // если клик был не по нашему блоку
        && box.has(e.target).length === 0) { // и не по его дочерним элементам
      $("#basket_tmd").slideUp(); // скрываем его

    }
  });
})
        
 
/******************************************* SLIDER ДОПОЛНЕНИЯ К БУКЕТУ ************************************/

// slick
  $('.js_slick_slider2').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
                
    responsive: [
    /*  {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },*/
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 670,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          speed: 100,
          cssEase: 'linear'
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          speed: 100,
          cssEase: 'linear'
          
        }
      }
    ]
  });
        
      $('.mp_items_out.one .double_prev').click(function(){
    $('.mp_items_out.one .js_slick_slider2').slick('slickPrev');
  return false;
  });
  $('.mp_items_out.one .double_next').click(function(){
    $('.mp_items_out.one .js_slick_slider2').slick('slickNext');
  return false;
  });
        
        $('.mp_items_out.two .double_prev').click(function(){
    $('.mp_items_out.two .js_slick_slider2').slick('slickPrev');
  return false;
  });
  $('.mp_items_out.two .double_next').click(function(){
    $('.mp_items_out.two .js_slick_slider2').slick('slickNext');
  return false;
  });

///()()()()()()()()()()()()()()()()()()()()(----- ВАШИ КОНТАКТЫ -----)()()()()()()()()()()()()()()()()()()()()//

  //niceScroll

  $(".main_list").niceScroll({

    background: "#ccc",
    cursorcolor:"#44b649",
    railalign: "left",
    cursorwidth: "10px",
    cursorborder: "#44b649",
    cursoropacitymin: "1"
  });

  //End niceScroll

   function resizeScrenn(){

    if ($(window).width() <= 640) {

      $(".main_info").unbind("click").bind('click', function() {

        if(!$(this).hasClass('active')) {
          $('.main_info').removeClass('active').children('.sup_list').slideUp(500);
          $(this).addClass('active');
          $(this).children('.sup_list').slideDown(500);
        } else {
          $(this).removeClass('active').children('.sup_list').slideUp(500);
        }
     });
      
    }  else if ($(window).width() > 640) {
       $(".main_info").unbind('click').bind('click', function(){
          $(".main_info").removeClass("active");
          $(this).addClass("active");
       });
    }

  }  resizeScrenn();
      
  $(window).resize(function(){
    resizeScrenn();
  });

 
  $('.close_btn').click(function(){
    $('.pop_up').css("visibility", "hidden");
    $('#ascrail2000').css("visibility", "hidden");
    $('.wrap_main_content').css("visibility", "hidden");
  });   

  $('.show_popup').click(function(){
    $('.pop_up').css("visibility", "visible");
    $('.wrap_main_content').css("visibility", "visible");
    $('#ascrail2000').css("visibility", "visible");
  });

  $('.pop_up').click(function(){
    $(this).css("visibility", "hidden");
    $('.wrap_main_content').css("visibility", "hidden");
    $('#ascrail2000').css("visibility", "hidden"); 
  });

///()()()()()()()()()()()( THE END )()()()()()()()()(----- ВАШИ КОНТАКТЫ -----)()()()()()()()()()()()()()()()()()()()()//

/*****************Счетчиек количества товаров в корзине***************************************/

$('.backet_edit_pluse').on('click',function(){
        var $qty=$(this).closest('.backet_edit_sum').find('.backet_edit_input');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    $('.backet_edit_minus').on('click',function(){
        var $qty=$(this).closest('.backet_edit_sum').find('.backet_edit_input');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
    });
/*****************END Счетчиек количества товаров***************************************/

/***************** ТАБНЫЙ СЛАЙДЕР ***************************************/

 $('.tabs_slide_1').on('click', 'a:not(.active)', function() {

    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.put_backet').find('div.js_slick_slider2').removeClass('active').eq($(this).index()).addClass('active');

     //$(".js_slick_slider2").slick('reinit'); //  инициализировать слайдер после клика на таб:
  });


 /***************** END ТАБНЫЙ СЛАЙДЕР ***************************************/

/***************** КНОПКА ЗАКРЫТИЯ КАРТОЧКИ С ТОВАРОМ ***************************************/

  $('.backet_edit_close').click(function(){
      $(this).parents('.backet_item_hide').animate({opacity: 0}, 700,function(){
        $(this).parents('.backet_item').hide();
        });
  });

  
/***************** END КНОПКА ЗАКРЫТИЯ КАРТОЧКИ С ТОВАРОМ ***************************************/

});






$(document).ready(function() {
	
	//E-mail Ajax Send

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Заявка успешно отправлена! Ожидайте звонка!");
			setTimeout(function() {
				$('.modal').removeClass('active');
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	// Maskinput

	  $("#tel").mask("+7(999) 999-99-99");

	//SLIDER

 	$('.bg-slider').bxSlider({
 		pager: false
 	});	

 	$('.reviews-slider').bxSlider({
 		pager: false,
 		slideWidth: 232,
	  	minSlides:2,
		maxSlides:2,
		moveSlides:1,
		slideMargin: 50
 	});	

 	//SCROLL

 	$('.push-up').click( function() { 

		var scrollEl = $(this).attr('href'); 
	    if ($(scrollEl).length != 0) { 
		   		$('html, body').animate({ scrollTop: $(scrollEl).offset().top }, 1000);
	    }
		return false; 
    });

 	
 	// MODAL 

 	$('.callback').click(function() {
 		$('.modal').addClass('active');
 	});
 	$('.modal-close').click(function() {
 		$('.modal').removeClass('active');

 	});

});
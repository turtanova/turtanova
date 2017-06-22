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
				$('.modal').fadeOut();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	// Maskinput

	  $("#tel").mask("+7(999) 999-99-99");

	//SLIDER

 	$('.slider').bxSlider({
 		nextText: "&rsaquo;",
 		prevText: "&lsaquo;",
 		pagerCustom: '.slider__pager'
 	});	

 	//MENU

 	$('.toggle-menu').click(function() {
 		$('.header__nav ul').slideToggle();
 		$(this).toggleClass('active');
 	});

 	// MODAL 

 	$('.order-button').click(function() {
 		$('.modal').fadeIn(500);

 	});
 	$('.modal__close').click(function() {
 		$('.modal').fadeOut(500);
 	});
	
});
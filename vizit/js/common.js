$(document).ready(function() {
	
	//E-mail Ajax Send

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за отзыв!");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	//SLIDER

 	$('.interior__slide').bxSlider({
 		pager: false,
 		auto: true,
 		slideWidth: 160,
	  	minSlides:1,
		maxSlides:4,
		moveSlides:1,
		slideMargin: 40
 	});	


 	//Rating  

 	$('.rating-form__item').click(function() {

 		$(this).toggleClass('active');
 	});
});
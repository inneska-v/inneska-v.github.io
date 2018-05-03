$(document).ready(function() {

	//E-mail Ajax Send
	$("ajax-contact-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "http://github.com/inneska-v/contact.php", //Change
			data: th.serialize()
		}).done(function() {

$(th).find('.success').addClass('.active').css('display','flex').hide().fadeIn();
			
			// alert("Thank you!");

			setTimeout(function() {
				// Done Functions
				$(th).find('.success').removeClass('.active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});








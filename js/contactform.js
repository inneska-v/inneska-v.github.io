jQuery(document).ready(function($) {

$(".ajax-contact-form").submit(function() {
var th = $(this);

$.ajax({
type: "POST",
url: "http://github.com/inneska-v/mail.php",
data: th.serialize()
}).done(function() {
	$(th).find('.success').addClass('.active').css('display','flex').hide().fadeIn();

	setTimeout(function() {
		$(th).find('.success').removeClass('.active').fadeOut();
		th.trigger('reset');
	}, 3000);
});

return false;

});

});
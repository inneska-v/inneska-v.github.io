$(document).ready(function () {

 $("a.scrollto").click(function () {
        var elementClick = '#'+$(this).attr("href").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });


//Animated.css

$("h1, h2, h3").animated("fadeInDown", "fadeOutDown");
$("p").animated("flipInX", "fadeOutDown");
$("strong").animated("zoomIn", "fadeOutDown");

$(".news_area .news_wrap-first").animated("fadeInLeft", "fadeOutDown");
$(".news_area .first_img").animated("fadeInRight", "fadeOutDown");
$(".news_area .second_img").animated("fadeInLeft", "fadeOutDown");
$(".news_area .news_wrap-second").animated("fadeInRight", "fadeOutDown");

$(".blog .blog_img").animated("flipInY", "fadeOutDown");


$(".advantages .advantages_wrap").animated("fadeInLeft", "fadeOutDown");
$(".advantages .advantages_list").animated("fadeInLeft", "fadeOutDown");
$(".advantages .advantages_img").animated("fadeInRight", "fadeOutDown");

$(".team .workers").animated("flipInY", "fadeOutDown");
$(".team .workers_block").animated("zoomIn", "fadeOutDown");
	

$(".footer .container_map").animated("rotateIn", "fadeOutDown");



$('.galleryItem').magnificPopup({
    type:'image',
   gallery: {
  enabled: true, // set to true to enable gallery

  preload: [0,2], // read about this option in next Lazy-loading section

  navigateByImgClick: true,

  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

  tPrev: 'Previous (Left arrow key)', // title for left button
  tNext: 'Next (Right arrow key)', // title for right button
  tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
}
 });



//MixitUp (меняем только класс или id)

var mixer = mixitup('#portfolio_mix');
var mixer = mixitup(containerEl);

var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});

})
$(document).ready(function () {

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

$("input, select, textarea").jqBootstrapValidation();


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
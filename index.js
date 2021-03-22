jQuery(function ($) {
	"use strict";


	//Header Slider
	if ($('.home_slider').length) {
		$('.home_slider').slick({
			vertical: false,
			arrows: false,
			dots: true
		});
	}

	$('.open_video').magnificPopup({
		type: 'iframe',
		disableOn: 700,
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});


	$('.shop_carousel').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		responsive:[
			{
				breakpoint: 414,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	if($('.testi_carousel').length){
		$('.testi_carousel').slick({
			infinite:true,
			slidesToShow: 3,
			slidesToScroll: 1,
			appendArrows: $('.testimonial_slider_box'),
			prevArrow:"<div class=\"left_arrow\"><div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div></div>",
			nextArrow:"<div class=\"right_arrow\"><div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div></div>",
			
		})

		$('.testi_carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			console.log(currentSlide);
			var tabs_container = $('.testimonial_container');
			//var current_index = nextSlide + 1;

			tabs_container.find($('.tab_item')).hide();
			tabs_container.find($('.tab_' + nextSlide)).show();
		})
	}


	if ($('.testi_gallery').length) {
		$('.testi_gallery').magnificPopup({ 
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'mfp-img-mobile',

			image: {
				verticalFit: true
			}
		});

	}
	

	//Twitter slider
	if ($('.content_twitter').length) {
		$('.content_twitter').slick({
			vertical: true,
			appendArrows: $('.twitter_slider .arrows'),
			prevArrow: "<span class=\"arrow_top\"><i class=\"fas fa-arrow-up\"></i></span>",
			nextArrow: "<span class=\"arrow_down\"> <i class=\"fas fa-arrow-down\"></i></span>"
		});
	}
	
	
	//responsive menu

	if($('.fa-bars').length){
		$('.fa-bars').on('click', function () {
			$('.headertop .inner_header nav > ul').show();

			$(this).hide();
			$('.fa-times').show();

		});

		$('.fa-times').on('click', function () {
			$('.headertop .inner_header nav > ul').hide();

			$(this).hide();
			$('.fa-bars').show();
		});
	}
	
	
	
	
});






































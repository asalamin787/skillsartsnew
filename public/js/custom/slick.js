$(".banner-part").slick({
	dots: !0,
	fade: !0,
	infinite: !0,
	autoplay: !0,
	arrows: !0,
	speed: 1e3,
	rtl: !0,
	prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
	nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [{
		breakpoint: 1200,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}, {
		breakpoint: 992,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}, {
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}, {
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: !1
		}
	}]
}), $(".product-slider").slick({
	dots: !1,
	infinite: !0,
	autoplay: !1,
	arrows: !0,
	speed: 1e3,
	rtl: !0,
	prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
	nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [{
		breakpoint: 1200,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 4
		}
	}, {
		breakpoint: 992,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		}
	}, {
		breakpoint: 768,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	}, {
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: !0,
			arrows: !1
		}
	}]
}), $(".blog-slider").slick({
	dots: !1,
	infinite: !0,
	autoplay: !1,
	arrows: !0,
	speed: 1e3,
	rtl: !0,
	prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
	nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
	slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [{
		breakpoint: 1200,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	}, {
		breakpoint: 992,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}, {
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: !0,
			arrows: !0
		}
	}, {
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: !0,
			arrows: !1
		}
	}]
}), $(".blogdet-slider").slick({
	dots: !1,
	infinite: !0,
	autoplay: !1,
	arrows: !0,
	speed: 1e3,
	rtl: !0,
	prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
	nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [{
		breakpoint: 1200,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		}
	}, {
		breakpoint: 992,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	}, {
		breakpoint: 768,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			variableWidth: !0,
			arrows: !0
		}
	}, {
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: !0,
			arrows: !1
		}
	}]
}), $(".theme-slider").slick({
	dots: !1,
	infinite: !0,
	autoplay: !0,
	arrows: !0,
	speed: 1e3,
	rtl: !0,
	prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
	nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [{
		breakpoint: 1200,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	}, {
		breakpoint: 992,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		}
	}, {
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}, {
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: !0,
			arrows: !1
		}
	}]
}), $(".preview-slider").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: !0,
	fade: !0,
	rtl: !0,
	asNavFor: ".thumb-slider",
	prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
	nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
	responsive: [{
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: !1
		}
	}]
}), $(".thumb-slider").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: ".preview-slider",
	rtl: !0,
	dots: !1,
	arrows: !1,
	centerMode: !0,
	focusOnSelect: !0,
	responsive: [{
		breakpoint: 992,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: !1
		}
	}, {
		breakpoint: 768,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: !1
		}
	}, {
		breakpoint: 576,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: !1
		}
	}, {
		breakpoint: 400,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: !1
		}
	}]
});


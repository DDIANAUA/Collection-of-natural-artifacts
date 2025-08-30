const swiper = new Swiper('.plants__swiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.plants__arrow--next',
		prevEl: '.plants__arrow--back',
	},
	breakpoints: {
		537: {
			slidesPerView: 2,
			pagination: {
				el: '.swiper-pagination',
			},
		},
		800: {
			slidesPerView: 3,
			pagination: {
				el: '.plants__number',
				type: 'fraction',
				renderFraction: function (currentClass, totalClass) {
					return (
						'<span class="' +
						currentClass +
						'"></span>' +
						' из ' +
						'<span class="' +
						totalClass +
						'"></span>'
					);
				},
			},
		},
		1000: {
			slidesPerView: 4,
			pagination: {
				el: '.plants__number',
				type: 'fraction',
				renderFraction: function (currentClass, totalClass) {
					return (
						'<span class="' +
						currentClass +
						'"></span>' +
						' из ' +
						'<span class="' +
						totalClass +
						'"></span>'
					);
				},
			},
		},
	},
});

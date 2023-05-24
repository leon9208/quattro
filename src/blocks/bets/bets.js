//bets
// .bets-slider

const betsSlider = new Swiper('.bets-slider', {
	spaceBetween: 8,
	slidesPerView: 'auto',
	enabled: false,
	pagination: {
		el: '.bets-slider .swiper-pagination',
  },
	breakpoints: {
		320: {
			enabled: true
		},
		1201: {
			enabled: false
		}
	}
});
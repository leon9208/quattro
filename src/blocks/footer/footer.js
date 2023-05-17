const footerNav = document.querySelectorAll('.footer-nav__head')

footerNav.forEach(fNav => {
	fNav.addEventListener('click', () => {
		fNav.classList.contains('isactive') ? fNav.classList.remove('isactive') : fNav.classList.add('isactive')
	})
});


// const footerSlider = new Swiper('.footer-slider', {
// 	slidesPerView: 'auto',
// 	speed: 400,
// 	spaceBetween: 100,
// 	loop: true,
// 	autoplay: {
// 		enabled: true,
// 		delay: 1,
// 	},
// 	freeMode: {
// 		enabled: true,
// 		sticky: true,
// 	},
// });

var footerSlider = new Swiper('.footer-slider', {
	// allowTouchMove: false,
	pauseOnMouseEnter: false,
	// disableOnInteraction: true,
	slidesPerView: 'auto',
	loop: true,
	speed: 5000,
	autoplay: {
		delay: 1,
		enabled: true,
	},
	freeMode: {
    enabled: true,
    sticky: false,
  },
	breakpoints: {
		320: {
			spaceBetween: 40
		},
		640: {
			spaceBetween: 50
		},
		960: {
			spaceBetween: 100
		}
	}
});
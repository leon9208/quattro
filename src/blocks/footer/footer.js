const footerNav = document.querySelectorAll('.footer-nav__head')

footerNav.forEach(fNav => {
	fNav.addEventListener('click', () => {
		fNav.classList.contains('isactive') ? fNav.classList.remove('isactive') : fNav.classList.add('isactive')
	})
});

var footerSlider = new Swiper('.footer-slider', {
	pauseOnMouseEnter: false,
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
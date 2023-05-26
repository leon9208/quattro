//hero
const promoSelect = document.querySelectorAll('.promo-select')

if (promoSelect) {
	promoSelect.forEach(prS => {
		prS.addEventListener('click', () => {
			prS.classList.add('isopen')
			hideOnClickOutside(prS)
		});
	
	
		prS.querySelectorAll('.promo-select__item').forEach(el => {
			el.addEventListener('click', (e) => {
				prS.querySelectorAll('.promo-select__item').forEach(el => el.classList.remove('isactive'))
				e.stopPropagation()
				el.classList.add('isactive')
				prS.classList.remove('isopen')
			})
		})
	})
};

const heroSlider = new Swiper('.hero-slider', {
  speed: 400,
  pagination: {
    el: '.hero-slider .swiper-pagination',
		clickable: true
    // type: 'bullets',
  },
});
const formInputText = document.querySelectorAll('.form-input')

formInputText.forEach(inp => {
	function inpFilled() {
		inp.value != '' ? inp.classList.add('isfilled') : inp.classList.remove('isfilled')
	}
	inp.addEventListener('blur', inpFilled)
	inpFilled()
});

document.addEventListener('click', (e) => {
	let isOpenSelector = document.querySelectorAll('.isopen')
	if (isOpenSelector) {
		isOpenSelector.forEach(item => {
			if (!item.contains(e.target)) {
				item.classList.remove('isopen')
			}
		})
	}
})

// if(document.documentElement.classList.remove('_scroll-lock')) {
// 	document.documentElement.classList.remove('_scroll-lock')
// }

document.querySelector('._overlay').addEventListener('click', () => document.documentElement.classList.remove('_scroll-lock'))

// header dropdown
const headerDropdown = document.querySelectorAll('.header-mnu__btn')

if (headerDropdown) {
	headerDropdown.forEach(el => {
		el.addEventListener('click', (e) => {
			let elParent = el.closest('.header-mnu')

			if (elParent.classList.contains('isopen')) {
				elParent.classList.remove('isopen')
				if(window.innerWidth < 578) {
					document.documentElement.classList.remove('_scroll-lock')
				}
			} else {
				elParent.classList.add('isopen')
				if(window.innerWidth < 578) {
					document.documentElement.classList.add('_scroll-lock')
				}
			}
		});
	})
};


const bCarousel = () => {
	document.querySelectorAll('.section-carousel .swiper').forEach((slider)=>{
		let carouselParent = slider.closest('.section-carousel')
		let caouselPagination = carouselParent.querySelector('.swiper-pagination')
		let carouselNav = carouselParent.querySelector('.swiper-nav')
		let prevArrow = carouselNav ? carouselNav.querySelector('.swiper-button--prev') : null
		let nextArrow = carouselNav ? carouselNav.querySelector('.swiper-button--next') : null
		let dataRow = slider.getAttribute('data-row');
		var data = slider.getAttribute('data-breakpoint') || null;
		var dataOptions = JSON.parse(data);
			const swiper = new Swiper(slider, {
				spaceBetween: 8,
				slidesPerView: data != null ? dataOptions.xl : 'auto',
				grid: {
					rows: dataRow || 1,
					fill: 'row'
				},
				touchMoveStopPropagation: true,
				touchReleaseOnEdges: true,
				mousewheel: {
					forceToAxis: true,
				},
				freeModeSticky: true,
				freeMode: {
					enabled: true,
					sticky: true,
				},
				navigation: {
					enabled: carouselNav != null ? true : false,
					nextEl: nextArrow,
					prevEl: prevArrow,
				},
				pagination: {
					enabled: caouselPagination != null ? true : false,
					el: caouselPagination,
					// dynamicBullets: true,
					// dynamicMainBullets: 4,
					clickable: true
				},
				breakpoints: {
					320: {
						slidesPerView: data != null && dataOptions.xs ? dataOptions.xs : 2.3,
						spaceBetween: 8,
						grid: {
							rows: dataRow || 1,
							fill: 'row'
						},
					},
					480: {
						slidesPerView: data != null && dataOptions.sm ? dataOptions.sm : 2.5,
						spaceBetween: 8,
						grid: {
							rows: dataRow || 1,
							fill: 'row'
						},
					},
					780: {
						slidesPerView: data != null && dataOptions.md ? dataOptions.md : 4,
						grid: {
							rows: dataRow || 1,
							fill: 'row'
						},
					},
					960: {
						slidesPerView: data != null && dataOptions.lg ? dataOptions.lg : 'auto',
						grid: {
							rows: dataRow || 1,
							fill: 'row'
						},
					},
					1200: {
						slidesPerView: data != null && dataOptions.xl ? dataOptions.xl : 'auto',
						grid: {
							rows: dataRow || 1,
							fill: 'row'
						},
					},
					1500: {
						slidesPerView: data != null && dataOptions.xxl ? dataOptions.xxl : dataOptions.xl,
						grid: {
							rows: dataRow || 1,
							fill: 'row'
						},
					}
				}
		});
	})
};

document.addEventListener("DOMContentLoaded", function(event) { 
	bCarousel()
});


//window onscroll function

window.addEventListener('scroll', () => {

	window.scrollY > 80 ? document.documentElement.classList.add('_window-scrolled') : document.documentElement.classList.remove('_window-scrolled')

})


var indexSearch = document.querySelector('.search-input')

if (indexSearch) {
	indexSearch.addEventListener('input', function() {
		if (this.value != '') {
			this.classList.add('isfilled')
		} else {
			this.classList.remove('isfilled')
		}
	});

	document.querySelector('.search-clear').addEventListener('click', function() {
		indexSearch.value = ''
	})
}

/* custom select */

const customSelect = document.querySelectorAll('.form-select')

if (customSelect) {
	customSelect.forEach(cs => {
		cs.addEventListener('click', (e) => {
			e.stopPropagation()
			cs.classList.toggle('isopen')
		});

		let csCurrent = cs.querySelector('.form-select__current span')
		let csInput = cs.querySelector('input')
		let csItems = cs.querySelectorAll('.form-select__item')
	
		csItems.forEach(csI => {
			csI.addEventListener('click', () => {
				let csInputValue = csI.dataset.selectValue
				csInput.value = csInputValue
				csCurrent.textContent = csI.textContent
				csItems.forEach(csi => csi.classList.remove('selected'))
				csI.classList.add('selected')
			})
		});
	});
};

const tooltips = document.querySelectorAll('[data-tooltip]')

if (tooltips) {
	tooltips.forEach(tooltip => {
		let tooltipContent = tooltip.dataset.tooltip

		let tooltipMarkup = `
			<div class="tooltip tooltip--bottom tooltip--center">${tooltipContent}</div>
		`
		// tooltip.appendChild(tooltipMarkup)
		tooltip.insertAdjacentHTML('beforeend', tooltipMarkup)
	});
};
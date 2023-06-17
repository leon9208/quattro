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

if (document.querySelector('._overlay')) {
	document.querySelector('._overlay').addEventListener('click', () =>{
		document.documentElement.classList.remove('_scroll-lock')
		document.documentElement.classList.remove('_modal-open')
		if (document.querySelector('[data-modal].isactive')) {
			document.querySelector('[data-modal].isactive').classList.remove('isactive')
		}
	})
}

// header dropdown
const headerDropdown = document.querySelectorAll('.header-mnu__btn')

if (headerDropdown) {
	headerDropdown.forEach(el => {
		el.addEventListener('click', (e) => {
			let elParent = el.closest('.header-mnu')

			if (elParent.classList.contains('isopen')) {
				elParent.classList.remove('isopen')
				if(window.innerWidth < 821) {
					document.documentElement.classList.remove('_scroll-lock')
				}
			} else {
				elParent.classList.add('isopen')
				if(window.innerWidth < 821) {
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

const promoCarousel = () => {
	document.querySelectorAll('[data-bonus-carousel]').forEach((slider)=>{
		let caouselPagination = slider.querySelector('.swiper-pagination')
		const promoSlide = new Swiper(slider, {
			spaceBetween: 8,
			slidesPerView: 'auto',
			touchMoveStopPropagation: true,
			touchReleaseOnEdges: true,
			enabled: false,
			watchOverflow: true,
			mousewheel: {
				forceToAxis: true,
			},
			freeModeSticky: true,
			freeMode: {
				enabled: true,
				sticky: true,
			},
			pagination: {
				enabled: false,
				el: caouselPagination,
				clickable: true
			},
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					enabled: true,
				},
				580: {
					slidesPerView: 'auto',
					enabled: true,
					pagination: {
						enabled: true,
					}
				},
				820: {
					enabled: false,
				}
			},
		});
	})
};

document.addEventListener("DOMContentLoaded", function(event) { 
	bCarousel();
	promoCarousel()
});


//window onscroll function

window.addEventListener('scroll', () => {

	window.scrollY > 80 ? document.documentElement.classList.add('_window-scrolled') : document.documentElement.classList.remove('_window-scrolled')
})

tippy('[data-tippy-content]', {
	allowHTML: true,
	interactive: true,
})
// collapse content
var collapseContent = document.querySelectorAll('.collapse')

if(collapseContent.length > 0) {
	collapseContent.forEach(collapse => {
		let collapseBtn = collapse.querySelector('.collapse-btn')
		let collapseBtnFirstText = collapseBtn.textContent
		let collapseBtnLastText = collapseBtn.getAttribute('data-text')

		collapseBtn.addEventListener('click', ()=> {
			collapse.classList.toggle('isopen')
			collapse.classList.contains("isopen") ? collapseBtn.textContent = collapseBtnLastText : collapseBtn.textContent = collapseBtnFirstText
		})
	})
};

// END collapse content


const formInputText = document.querySelectorAll('.form-input')

formInputText.forEach(inp => {
	inp.addEventListener('blur', () => {
		inp.value != '' ? inp.classList.add('isfilled') : inp.classList.remove('isfilled')
	})
});


// header balace dropdown
const headerBalance = document.querySelector('.balance')

if (headerBalance) {
	let el = headerBalance.querySelector('.balance-btn')
	el.addEventListener('click', () => {
		el.closest('.balance').classList.toggle('isopen')
		hideOnClickOutside(headerBalance)
	});
};

function hideOnClickOutside(element) {
	const outsideClickListener = event => {
		var removeClass = document.querySelector('.isopen')
			if (!element.contains(event.target)) {
				if(removeClass){
					removeClass.classList.remove('isopen')
				}
				removeClickListener();
			}
	}

	const removeClickListener = () => {
			document.removeEventListener('click', outsideClickListener);
	}

	document.addEventListener('click', outsideClickListener);
};


const bCarousel = () => {
	let baseCarousel = document.querySelectorAll('.section .swiper')
	let pagination = document.querySelectorAll('.section .swiper-pagination')
	let prevArrow = document.querySelectorAll('.section .swiper-button--prev')
	let nextArrow = document.querySelectorAll('.section .swiper-button--next')
	baseCarousel.forEach((slider, index)=>{
		var dataRow = slider.getAttribute('data-row');
		var data = slider.getAttribute('data-breakpoint') || null;
		var dataOptions = JSON.parse(data);
			const swiper = new Swiper(slider, {
				spaceBetween: 10,
				slidesPerView: data != null ? dataOptions.xl : 'auto',
				// slidesPerColumn: 2,
				// autoHeight: true,
				grid: {
					rows: dataRow || 1,
					fill: 'row'
				},
				mousewheel: {
					forceToAxis: true,
				},
				freeMode: {
					enabled: true,
					sticky: true,
				},
				navigation: {
					nextEl: nextArrow[index],
					prevEl: prevArrow[index],
				},
				pagination: {
					enabled: true,
					el: pagination[index],
					dynamicBullets: true,
					dynamicMainBullets: 4,
					clickable: true
				},
				breakpoints: {
					320: {
						slidesPerView: data != null && dataOptions.xs ? dataOptions.xs : 2.3,
						spaceBetween: 8,
						grid: {
							rows: 1,
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

	window.scrollY > 50 ? document.documentElement.classList.add('_window-scrolled') : document.documentElement.classList.remove('_window-scrolled')

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
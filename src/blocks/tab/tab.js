//tab

const tabLink = document.querySelectorAll('.tab-nav__link')
const tabContentItem = document.querySelectorAll('.tab-content__item')

const activeTab = (el) => {
	tabLink.forEach(i => {i.classList.remove('is-show')})
	tabContentItem.forEach(c => c.classList.remove('is-show'))
	if (document.querySelector(`a[href="${el}"]`)) {
		document.querySelector(`a[href="${el}"]`).classList.add('is-show')
	}
	if (document.querySelector(el)) {
		document.querySelector(el).classList.add('is-show')
	}
}

if(tabLink.length > 0) {
	tabLink.forEach(tabItem => {
		tabItem.addEventListener('click', (e) => {
			e.preventDefault()
			let tabHref = tabItem.getAttribute('href')
			history.replaceState({}, '', tabHref)
			activeTab(tabHref)
			tabNavAnimInit()
			return false;
		})
	})
};

// open tab via hash (location.hash)

const activeTabHash = () => {
	let winHash = window.location.hash
	if(winHash != '') {
		activeTab(winHash)
	} else {
		console.log('hash is empty')
	}
	window.scroll(0, 0)
}

window.addEventListener('DOMContentLoaded', () => {
	activeTabHash()
	customSelect('.cs-select select')
	tabNavAnimInit()
});
window.addEventListener('hashchange', () => {
	activeTabHash()
	tabNavAnimInit()
});



// sliding animation active nav link
function tabNavAnimInit() {
	const slideTabNav = document.querySelectorAll('.tab-switcher');
	
	if (slideTabNav) {
		slideTabNav.forEach(tabNav => {
	
			const tabItem = tabNav.querySelectorAll('.tab-switcher__item');
			const tabItemIndicator = tabNav.querySelector('.tab-switcher__indicator');
	
			function handleIndicator(el) {
				tabItem.forEach(item => {
					item.classList.remove('is-active');
					item.removeAttribute('style');
				});
	
				if(el.closest('.tab-switcher--bd')) {
					tabItemIndicator.style.width = `${el.offsetWidth}px`;
					tabItemIndicator.style.left = `${el.offsetLeft}px`;
				} else {
					tabItemIndicator.style.width = `${el.offsetWidth}px`;
					tabItemIndicator.style.height = `${el.offsetHeight}px`;
					tabItemIndicator.style.top = `${el.offsetTop}px`;
					tabItemIndicator.style.left = `${el.offsetLeft}px`;
				}
				
				el.classList.add('is-active');
			}
	
			function tabSwitchInit() {
				tabItem.forEach((item) => handleIndicator(item))
			}
	
			tabItem.forEach((item, index) => {
				item.addEventListener('click', (e) => {
					e.preventDefault()
					if(item.getAttribute('href') != null) {
						let modalContnet = item.closest('.modal-content')
						document.querySelectorAll('[data-tab-content]').forEach(tabContent => tabContent.classList.remove('isactive'))
						document.querySelector(item.getAttribute('href')).classList.add('isactive')

						if (modalContnet) {
							index === 0 ? modalContnet.classList.add('is-active') : modalContnet.classList.remove('is-active')
						}
					}
					handleIndicator(item)
				});
				item.classList.contains('is-active') ? handleIndicator(item) : '';
				window.addEventListener('resize', () => {
					item.classList.contains('is-active') ? handleIndicator(item) : ''
				});
			});
		})
	}
};
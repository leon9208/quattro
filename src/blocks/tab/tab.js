//tab

const tabLink = document.querySelectorAll('.tab-nav__link')
const tabContentItem = document.querySelectorAll('.tab-content__item')

const activeTab = (el) => {
	tabLink.forEach(i => {i.classList.remove('isactive')})
	tabContentItem.forEach(c => c.classList.remove('isactive'))
	if (document.querySelector(`a[href="${el}"]`)) {
		document.querySelector(`a[href="${el}"]`).classList.add('isactive')
	}
	if (document.querySelector(el).classList.add('isactive')) {
		document.querySelector(el).classList.add('isactive')
	}
}

if(tabLink.length > 0) {
	tabLink.forEach(tabItem => {
		tabItem.addEventListener('click', (e) => {
			e.preventDefault()
			let tabHref = tabItem.getAttribute('href')
			// window.location.hash = tabHref
			history.replaceState({}, '', tabHref)
			activeTab(tabHref)
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

window.addEventListener('DOMContentLoaded', activeTabHash);
window.addEventListener('hashchange', () => {
	activeTabHash()
});



// sliding animation active nav link
const slideTabNav = document.querySelectorAll('.tab-switcher');

if (slideTabNav) {
	slideTabNav.forEach(tabNav => {

	const tabItem = tabNav.querySelectorAll('.tab-switcher__item');
	const tabItemIndicator = tabNav.querySelector('.tab-switcher__indicator');

	function handleIndicator(el) {
		tabItem.forEach(item => {
			item.classList.remove('isactive');
			item.removeAttribute('style');
		});

		tabItemIndicator.style.width = `${el.offsetWidth}px`;
		tabItemIndicator.style.left = `${el.offsetLeft}px`;
		tabItemIndicator.style.backgroundColor = el.getAttribute('active-color');
		
		el.classList.add('isactive');
		el.style.color = el.getAttribute('active-color');
	}

	tabItem.forEach((item, index) => {
		item.addEventListener('click', (e) => {
			e.preventDefault()
			if(item.getAttribute('href') != null) {
				document.querySelectorAll('[data-tab-content]').forEach(tabContent => tabContent.classList.remove('isactive'))
				document.querySelector(item.getAttribute('href')).classList.add('isactive')
			}
			handleIndicator(item)
		});
		item.classList.contains('isactive') && handleIndicator(item);
	});
})
}

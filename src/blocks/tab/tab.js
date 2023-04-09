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
			activeTab(tabHref)
		})
	})
};

// open tab via hash (location.hash)
window.addEventListener('DOMContentLoaded', () => {
	let winHash = window.location.hash
	if(winHash != '') {
		activeTab(winHash)
	} else {
		console.log('hash is empty')
	}
})

const openModal = (el, callback) => {
	document.documentElement.classList.add('_scroll-lock')
	document.documentElement.classList.add('_modal-open')
	document.querySelector(el).classList.add('isactive')
	callback ? callback() : ''
}

const closeModal = () => {
	document.documentElement.classList.remove('_scroll-lock')
	document.documentElement.classList.remove('_modal-open')
	document.querySelectorAll('[data-modal].isactive').forEach(isActiveSelector => isActiveSelector.classList.remove('isactive'))
}

const modalTargetLink = document.querySelectorAll('[data-modal-target]')
const modalCLoseBtn = document.querySelectorAll('[data-modal-close]')

if (modalTargetLink) {
	modalTargetLink.forEach(tLink => {
		tLink.addEventListener('click', (e) => {
			// e.preventDefault()
			closeModal()
			let tLinkHref = tLink.getAttribute('href')
			openModal(tLinkHref)
		})
	})
};

if (modalCLoseBtn) {
	modalCLoseBtn.forEach(tClose => {
		tClose.addEventListener('click', (e) => {
			e.preventDefault()
			closeModal()
		})
	})
};

const autoriastionTab = (el) => {
	let activeClass = document.querySelectorAll('.autorisation.isactive, .autorisation-content__item.isactive')
	if(activeClass.length > 0) {
		activeClass.forEach(item => item.classList.remove('isactive'))
	}
	document.querySelector(`[href="${el}"]`).click()
}

const remoteClick = (selector) => {
	if(selector) {
		document.querySelector(selector).click()
	}
};
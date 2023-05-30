const openModal = (el) => {
	document.documentElement.classList.add('_scroll-lock')
	document.querySelector(el).classList.add('isactive')
}

const closeModal = () => {
	document.documentElement.classList.remove('_scroll-lock')
	document.querySelectorAll('[data-modal].isactive').forEach(isActiveSelector => isActiveSelector.classList.remove('isactive'))
}

const modalTargetLink = document.querySelectorAll('[data-modal-target]')
const modalCLoseBtn = document.querySelectorAll('[data-modal-close]')

if (modalTargetLink) {
	modalTargetLink.forEach(tLink => {
		tLink.addEventListener('click', (e) => {
			e.preventDefault()
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
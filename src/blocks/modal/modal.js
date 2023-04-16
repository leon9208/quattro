// //modal
// const htmlTag = document.documentElement
// var Scrollbar = window.Scrollbar;
// Scrollbar.initAll();

// const closeModal = () => {
// 	htmlTag.classList.remove('_overflow-hidden')
// 	if(document.querySelector('.modal').classList.contains('isopen')) {
// 		document.querySelector('.modal.isopen').classList.remove('isopen')
// 	}
// }

// const openModal = (selector) => {
// 	let modalSelector = document.querySelector(selector)
// 	if(modalSelector != null) {
// 		closeModal()
// 		htmlTag.classList.add('_overflow-hidden')
// 		modalSelector.classList.add('isopen')
// 	}
// }

// const closeModalBtn = document.querySelectorAll('[data-modal-close]')

// if (closeModalBtn.length > 0) {
// 	closeModalBtn.addEventListener('click', closeModal)
// }

// setTimeout(
// 	openModal('#search-modal')
// , 3000)
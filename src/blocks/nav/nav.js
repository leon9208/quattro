const themeBtn = document.querySelector('.theme-switcher__input')
const doc = document.documentElement
themeBtn.addEventListener('change', () => {
	// console.log(themeBtn.checked)
	themeBtn.checked ? doc.classList.add('_dark-theme') : doc.classList.remove('_dark-theme')
})
const themeBtn = document.querySelectorAll('.theme-switcher__input')
const doc = document.documentElement
themeBtn.forEach(thBtn => {
	thBtn.addEventListener('change', () => {
		thBtn.checked ? doc.classList.add('_dark-theme') : doc.classList.remove('_dark-theme')
	})
})
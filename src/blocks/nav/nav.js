//theme switcher
const themeBtn = document.querySelectorAll('.theme-switcher__input');
themeBtn.forEach(thBtn => {
	thBtn.addEventListener('change', () => {
		if(thBtn.checked) {
			document.documentElement.classList.add('_dark-theme')
			themeBtn.forEach(thBtn => thBtn.checked = true)
			setCookie('theme', 'dark', {secure: true, 'max-age': 99999999});
		} else {
			document.documentElement.classList.remove('_dark-theme')
			themeBtn.forEach(thBtn => thBtn.checked = false)
			deleteCookie('theme')
		}
	})
});

const themeSwitcher = () => {
	if (getCookie('theme')) {
		document.documentElement.classList.add('_dark-theme')
		themeBtn.forEach(thBtn => thBtn.checked = true)
	} else {
		document.documentElement.classList.remove('_dark-theme')
		themeBtn.forEach(thBtn => thBtn.checked = false)
	}
};

themeSwitcher();

//end theme switcher
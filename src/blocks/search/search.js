//search
var indexSearch = document.querySelectorAll('.search-input')

if (indexSearch) {
	indexSearch.forEach(sInp => {
		let clrBtn = sInp.closest('.search').querySelector('.search-clear')
		if (clrBtn) {
			clrBtn.addEventListener('click', () => {
				sInp.classList.remove('isfilled')
				sInp.value = ''
			})
		}
	})
};
//category
const categoryNav = document.querySelectorAll('.category-nav__input')
const catGames = document.querySelectorAll('.category-grid .game[data-category]')
const catGamesTitle = document.querySelector('.category-body__title')

const filterGames = (category) => {
	catGames.forEach(games => {
		catGamesTitle ? catGamesTitle.textContent = category.nextElementSibling.querySelector('.category-nav__title').textContent : ''
		"all" === category.value || games.dataset.category === category.value ? games.style.display="block" : games.style.display="none"
	})
}

if (categoryNav.length > 0) {
	categoryNav.forEach(catNav => {
		catNav.addEventListener('change', () => {
			filterGames(catNav)
			categorySelectValue()
		})
	})
}

var categorySelectValue = () => {
	let catSelectValueChecked = document.querySelector('.category-select__item input:checked')

	if(catSelectValueChecked) {
		console.log(catSelectValueChecked.value)
	}
}

const catSelectToggle = () => {
	if (document.querySelector('.category-select').classList.contains('isopen')) {
		document.querySelector('.category-select').classList.remove('isopen')
	} else {
		document.querySelector('.category-select').classList.add('isopen')
	}

	hideOnClickOutside(document.querySelector('.category-nav__item--select'))
};

if (document.querySelector('.category-nav__item--select')) {
	document.querySelector('.category-nav__item--select').addEventListener('click', catSelectToggle)
}

const categorySelectOptions = document.querySelectorAll('.category-select__item input');

if (categorySelectOptions.length > 0) {
	categorySelectOptions.forEach(catOption => {
		catOption.addEventListener('change', () => {
			let catSelectCurrent = catOption.closest('.category-select').querySelector('.category-select__current')
			catSelectCurrent.textContent = catOption.value
			catSelectToggle()
		})
	})
}
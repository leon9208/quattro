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
		})
	})

}
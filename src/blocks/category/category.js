//category
const categoryNav = document.querySelectorAll('.category-nav__input')
const catGames = document.querySelectorAll('.category-grid .game[data-category]')

const filterGames = (category) => {
	catGames.forEach(games => "all" === category || games.dataset.category === category ? games.style.display="block" : games.style.display="none")
}

if (categoryNav.length > 0) {
	categoryNav.forEach(catNav => {
		catNav.addEventListener('change', () => {
			filterGames(catNav.value)
		})
	})

}
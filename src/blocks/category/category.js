const fadeIn = (el, timeout, display) => {
  el.style.opacity = 0;
  el.style.display = display || 'block';
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
};

const fadeOut = (el, timeout) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;

  setTimeout(() => {
    el.style.display = 'none';
  }, timeout);
};

//category filter
const categoryNav = document.querySelectorAll('.category-nav__input')
const catGames = document.querySelectorAll('.category-grid .game[data-category]')
const catGamesTitle = document.querySelector('.category-body__title [data-category-title]')

const filterGames = (category) => {
	catGames.forEach(games => {
		catGamesTitle ? catGamesTitle.textContent = category.nextElementSibling.querySelector('.category-nav__title').textContent : ''
		"all" === category.value || games.dataset.category === category.value ? fadeIn(games, 1000, 'block') : games.style.display="none"
	})
}

if (categoryNav.length > 0) {
	categoryNav.forEach(catNav => {
		catNav.addEventListener('change', () => {
			filterGames(catNav)
		})
	})
}

const filterNav = new Swiper('.category-nav__list', {
	slidesPerView: 'auto',
	spaceBetween: 7,
	watchSlidesVisibility: true,
	slideToClickedSlide: true,
	freeMode: {
		enabled: true,
		sticky: true,
	},
	preventClicks :true,
	a11y: false,
});
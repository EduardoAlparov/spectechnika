export default () => {
  const categoryFilters = document.querySelector('.category__filters');
  const categoryFiltersButton = document.querySelector('.button-filter');

	if(categoryFiltersButton) {
		categoryFiltersButton.addEventListener('click', () => {
			document.body.classList.add('disable-scroll');
			categoryFilters.classList.add('category__filters--open');
		})
	}

	if(categoryFilters) {
		categoryFilters.addEventListener('click', (e) => {
			if(e.target.closest('.filters__close-btn') || 
			!e.target.closest('.filters')) {
				document.body.classList.remove('disable-scroll');
				categoryFilters.classList.remove('category__filters--open');
			}
		})
	}
}
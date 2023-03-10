export default () => {
	const searchPopupButtons = document.querySelectorAll('[data-path="search-popup"]');
	const searchPopupButtonInNav = document.querySelector('.nav-popup__button--search');
	const searchModalContainer = document.querySelector('.modal__container--search');

	if(!searchPopupButtons.length) {
		return;
	}
	
	searchPopupButtons.forEach(btn => {
		btn.addEventListener('click', (e) => {
			if((btn.classList.contains('site-controls__link--search')) &&
			(window.matchMedia("(min-width: 768px)").matches)) {
				let rects = btn.getBoundingClientRect();
				searchModalContainer.style.left = rects.left + "px";

				document.body.classList.add('disable-scroll--with-search');
			} else {
				document.body.classList.add('disable-scroll--with-search');
			}
		})
	})

	searchPopupButtonInNav.addEventListener('click', () => {
		setTimeout(() => {
			let button = document.createElement("button");
			button.classList.add('visually-hidden');
			button.dataset.path = "search-popup";
			document.body.appendChild(button);
			
			button.click();
			document.body.classList.add('disable-scroll--with-search');
			button.remove();
		}, 100);

	})
}


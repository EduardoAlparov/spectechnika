export default () => {
  const navButtons = document.querySelectorAll('.button-nav');

	if(!navButtons.length) {
		return;
	}
	
	navButtons.forEach(btn => {
		btn.addEventListener('click', (e) => {
			document.body.classList.add('disable-scroll--with-menu');
		})
	})
}
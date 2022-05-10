let burger = document.querySelector('.burger');
let mobMenu = document.querySelector('.header_menu');

burger.addEventListener('click', () => {
	if (mobMenu.classList.contains('header_menu--hide')) {
		mobMenu.classList.remove('header_menu--hide');
		burger.classList.add('burger--open');
	} else {
		mobMenu.classList.add('header_menu--hide');
		burger.classList.remove('burger--open');
	}
});

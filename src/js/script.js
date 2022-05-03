let burder = document.querySelector('.burger');
let mobMenu = document.querySelector('.mob_menu');
let mobMenuClose = document.querySelector('.mob_menu__close');

burder.addEventListener('click', () => {
	if (mobMenu.classList.contains('hide')) {
		mobMenu.classList.remove('hide');
	} else {
		mobMenu.classList.add('hide');
	}
});

mobMenuClose.addEventListener('click', () => {
	mobMenu.classList.add('hide');
});

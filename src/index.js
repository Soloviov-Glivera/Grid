// scss
import './scss/main_global.scss';
// js
import './js/app';
import './js/script';

// import sprite_icons svg
function requireAll(r) {
	r.keys().forEach(r);
}

requireAll(require.context('./images/icons/sprite_icons/', true, /\.svg$/));

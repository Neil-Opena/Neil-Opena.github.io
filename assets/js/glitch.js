/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
	const glitch_body_class = document.getElementsByClassName('glitch_body')

	for(var i = 0; i < glitch_body_class.length; i++){
		setTimeout(() => glitch_body_class[i].classList.add('render'), 60);
	}

	const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
	const total = navdemos.length;
	const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
	const navigate = (linkEl) => {
		for(var i = 0; i < glitch_body_class.length; i++){
			glitch_body_class[i].classList.remove('render');
			glitch_body_class[i].addEventListener('transitionend', () => window.location = linkEl.href);
		}
	};
	navdemos.forEach(link => link.addEventListener('click', (ev) => {
		ev.preventDefault();
		navigate(ev.target);
	}));
	document.addEventListener('keydown', (ev) => {
		const keyCode = ev.keyCode || ev.which;
		let linkEl;
		if ( keyCode === 37 ) {
			linkEl = current > 0 ? navdemos[current-1] : navdemos[total-1];
		}
		else if ( keyCode === 39 ) {
			linkEl = current < total-1 ? navdemos[current+1] : navdemos[0];
		}
		else {
			return false;
		}
		navigate(linkEl);
	});
	imagesLoaded('.glitch__img_1', { background: true }, () => {
		for(var i = 0; i < glitch_body_class.length; i++){
			glitch_body_class[i].classList.remove('loading');
			glitch_body_class[i].classList.add('imgloaded');
		}
	});
}

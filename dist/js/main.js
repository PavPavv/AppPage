'use strict';

const nonActiveMenu = () => {
	const menu = document.getElementById('nonactive-menu');
	const option = document.getElementById('option');

	menu.addEventListener('click', () => {
		if (option.style.display === 'none') {
			option.style.display = 'block'
		} else {
			option.style.display = 'none';
		}
	});
};

nonActiveMenu();

const activeMenu = () => {
	const menu = document.getElementById('active-menu');
	const option = document.getElementById('option-one');

	menu.addEventListener('click', () => {
		if (option.style.display === 'none') {
			option.style.display = 'block'
		} else {
			option.style.display = 'none';
		}
	});
};

activeMenu();
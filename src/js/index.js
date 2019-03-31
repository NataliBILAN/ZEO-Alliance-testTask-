'use strict';
const buttonOpen = document.querySelector('.btn-open');
const popupWindow = document.querySelector('.popup');
const buttonClose = document.querySelector('.btn-close__icon');
const useSvg = document.querySelector('.btn-close__use');
const buttonCancel = document.querySelector('.btn-cancel');
const buttonUninstall = document.querySelector('.btn-uninstall');

function handleOpenPopup(event) {
	event.preventDefault();
	popupWindow.classList.add('popup--open');
}
buttonOpen.addEventListener('click', handleOpenPopup);

function handleClosePopup(event) {
	event.preventDefault();
	if (
		event.target === buttonClose ||
		event.target === popupWindow ||
		event.target === buttonCancel ||
		event.target === useSvg
	) {
		popupWindow.classList.remove('popup--open');
	}
}
popupWindow.addEventListener('click', handleClosePopup);

function handleUninstall(event) {
	event.preventDefault();
	popupWindow.classList.remove('popup--open');
	if (popupWindow.classList !== 'popup--open') {
		alert('Done!');
	}
}
buttonUninstall.addEventListener('click', handleUninstall);

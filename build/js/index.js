'use strict';

var buttonOpen = document.querySelector('.btn-open');
var popupWindow = document.querySelector('.popup');
var buttonClose = document.querySelector('.btn-close__icon');
var useSvg = document.querySelector('.btn-close__use');
var buttonCancel = document.querySelector('.btn-cancel');
var buttonUninstall = document.querySelector('.btn-uninstall');

function handleOpenPopup(event) {
  event.preventDefault();
  popupWindow.classList.add('popup--open');
}

buttonOpen.addEventListener('click', handleOpenPopup);

function handleClosePopup(event) {
  event.preventDefault();

  if (event.target === buttonClose || event.target === popupWindow || event.target === buttonCancel || event.target === useSvg) {
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
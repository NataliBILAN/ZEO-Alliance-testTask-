'use strict';

var buttonOpen = document.querySelector('.btn-open');
var modalWindow = document.querySelector('.modal');
var buttonClose = document.querySelector('.btn-close__icon');
var buttonCancel = document.querySelector('.btn-cancel');
var buttonUninstall = document.querySelector('.btn-uninstall');

function handleOpenWindow(event) {
  event.preventDefault();
  modalWindow.classList.add('modal--open');
}

buttonOpen.addEventListener('click', handleOpenWindow);

function handleCloseWindow(event) {
  event.preventDefault();
  console.log(event.target);

  if (event.target === buttonClose || event.target === modalWindow || event.target === buttonCancel) {
    modalWindow.classList.remove('modal--open');
  }
}

modalWindow.addEventListener('click', handleCloseWindow);

function handleUninstall(event) {
  event.preventDefault();
  modalWindow.classList.remove('modal--open');

  if (modalWindow.classList !== 'modal--open') {
    alert('Done!');
  }
}

buttonUninstall.addEventListener('click', handleUninstall);
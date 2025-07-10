// temples.js

// Footer copyright year & last modified
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

// Hamburger toggle
const menuButton = document.querySelector('#menu');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.innerHTML = nav.classList.contains('open') ? '&#10005;' : '&#9776;';
});
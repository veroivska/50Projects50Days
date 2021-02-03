const SEARCH = document.querySelector('.search');
const BTN = document.querySelector('.btn');
const INPUT = document.querySelector('.input');

BTN.addEventListener('click', () => {
    SEARCH.classList.toggle('active');
    INPUT.focus();
});
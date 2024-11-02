/* MODAL FILTERS LANG */

const langContainer = document.getElementById('modal-filters__lang');
const langRU = document.getElementById('lang-ru');
const langEN = document.getElementById('lang-en');
const langLine = document.getElementById('lang-toggle-line');

langRU.addEventListener('click', () => {
    langEN.classList.remove('modal-filters__lang-heading-active');
    langRU.classList.add('modal-filters__lang-heading-active');
    langLine.classList.remove('lang-line-en');
    langLine.classList.add('lang-line-ru');
});

langEN.addEventListener('click', () => {
    langEN.classList.add('modal-filters__lang-heading-active');
    langRU.classList.remove('modal-filters__lang-heading-active');
    langLine.classList.add('lang-line-en');
    langLine.classList.remove('lang-line-ru');
});
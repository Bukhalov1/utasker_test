/* TASK CREATOR PAGE */
const PaidFeaturesBtn = document.getElementById('paid-features-btn');
const PaidFeaturesBtnIcone = document.getElementById('paid-features-btn-icone');

const PaidList = document.getElementById('paid-list');

PaidFeaturesBtn.addEventListener('click', ()=> {
    PaidFeaturesBtnIcone.classList.toggle("paid-features-btn-icone-active");
    PaidList.classList.toggle("paid-list-active");
});

/* MODAL FILTERS LANG */

const langContainer = document.getElementById('modal-filters__lang');
const langRU = document.getElementById('lang-ru');
const langEN = document.getElementById('lang-en');
const langLine = document.getElementById('lang-toggle-line');

langRU.addEventListener('click', () => {
    langLine.classList.remove('lang-line-en');
    langLine.classList.add('lang-line-ru');
})
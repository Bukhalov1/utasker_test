document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.section-news__slider-image');
    const dots = document.querySelectorAll('.section-news__slider-dot');
    let currentSlide = 0;

    function activateSlide(n) {
        slides.forEach((slide, index) => {
            slide.style.display = 'none'; // Скрываем все слайды
            dots[index].classList.remove('dot-active'); // Убираем активный класс у всех точек
        });
        slides[n].style.display = 'block'; // Показываем нужный слайд
        dots[n].classList.add('dot-active'); // Добавляем активный класс нужной точке
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Переходим к следующему слайду
        activateSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Устанавливаем интервал смены слайдов
    activateSlide(0); // Активируем первый слайд
});
import {setupModal} from './modules/modal.js';
import {setupMobileMenu} from './modules/mobileMenu.js';
import {setupForm} from './modules/formHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    const { closeModal } = setupModal();

    setupMobileMenu();
    setupForm(closeModal);
});

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
});


Fancybox.bind("[data-fancybox='gallery']", {
    Thumbs: false,
    Toolbar: {
        display: [
            "zoom",
            "close"
        ],
    },
});

ymaps.ready(init);

function init() {
    const map = new ymaps.Map("map", {
        center: [55.025250, 82.928353],
        zoom: 15
    });

    const placemark = new ymaps.Placemark(
        [55.030199, 82.920430],
        {
            balloonContent: 'Тестовое KONTUR'
        },
        {
            preset: 'islands#redDotIcon'
        }
    );

    map.geoObjects.add(placemark);
}
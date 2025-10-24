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
        delay: 6000,
        disableOnInteraction: false,
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

const orderForm = document.querySelector('.orderForm');
const openFormButtons = document.querySelectorAll('.openForm');
const modalOverlay = document.querySelector('.overlay');

const openModal = () => {
    modalOverlay.classList.add('active');
}

const closeModal = () => {
    modalOverlay.classList.remove('active');
}

openFormButtons.forEach(button => {
    button.addEventListener('click', openModal)
})

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("submit");
});
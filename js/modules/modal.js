export const setupModal = () => {
    const modalOverlay = document.querySelector('.overlay');
    const openFormButtons = document.querySelectorAll('.openForm');

    if (!modalOverlay) return;

    const openModal = () => modalOverlay.classList.add('active');
    const closeModal = () => modalOverlay.classList.remove('active');

    openFormButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
};

export const setupModal = () => {
    const modalOverlay = document.querySelector('.overlay');
    const openFormButtons = document.querySelectorAll('.openForm');

    if (!modalOverlay) return;

    const openModal = () => {
        document.body.style.overflow = 'hidden';
        modalOverlay.classList.add('active')
    };

    const closeModal = () => {
        document.body.removeAttribute('style');
        modalOverlay.classList.remove('active')
    };

    openFormButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    return { closeModal };
};

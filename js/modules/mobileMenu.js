export const setupMobileMenu = () => {
    const mobileNavigation = document.querySelector('nav');
    const burger = document.querySelector('.burger');
    const closeMenuButton = document.querySelector('.closeMenu');

    if (!mobileNavigation || !burger || !closeMenuButton) return;

    const openMenu = () => {
        document.body.style.overflow = 'hidden';
        mobileNavigation.classList.add('active');
    };

    const closeMenu = () => {
        document.body.removeAttribute('style');
        mobileNavigation.classList.remove('active')
    };

    burger.addEventListener('click', openMenu);
    closeMenuButton.addEventListener('click', closeMenu);
};

export const setupMobileMenu = () => {
    const mobileNavigation = document.querySelector('nav');
    const burger = document.querySelector('.burger');
    const closeMenuButton = document.querySelector('.closeMenu');

    if (!mobileNavigation || !burger || !closeMenuButton) return;

    const openMenu = () => mobileNavigation.classList.add('active');
    const closeMenu = () => mobileNavigation.classList.remove('active');

    burger.addEventListener('click', openMenu);
    closeMenuButton.addEventListener('click', closeMenu);
};

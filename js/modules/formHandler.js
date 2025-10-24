export const setupForm = () => {
    const orderForm = document.querySelector('.orderForm');
    if (!orderForm) return;

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('submit');
        // Здесь можно добавить логику отправки формы через fetch()
    });
};

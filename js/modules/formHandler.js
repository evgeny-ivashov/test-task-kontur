export const setupForm = (closeModal) => {
    const orderForm = document.querySelector('.orderForm');
    if (!orderForm) return;

    orderForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        closeModal?.();

        const formData = new FormData(orderForm);
        const data = Object.fromEntries(formData.entries());

        console.log("данные:", data);

        try {
            const response = await fetch('/api/send-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) console.error('Ошибка отправки');

            alert('Данные можно посмотреть в консоли');

            orderForm.reset();
            closeModal?.();
        } catch (error) {
            console.error('Ошибка', error);
            alert('Произошла ошибка');
        }
    });
};

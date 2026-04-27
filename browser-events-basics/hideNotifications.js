export function hideNotifications() {
    const elements = document.querySelectorAll('.notification-close');
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            const notification = element.parentElement;
            notification.style.display = 'none';
        });
    });
}

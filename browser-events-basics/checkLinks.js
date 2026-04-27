export function checkLinks() {
    const container = document.querySelector('.check-links');
    if (!container) return;
    container.addEventListener('click', function (event) {
        const link = event.target.closest('a');
        if (!link) return;
        const href = link.getAttribute('href');
        if (href && /^https?:\/\//i.test(href)) {
            const confirmed = confirm('Do you want to proceed and leave our cool website?');
            if (!confirmed) {
                event.preventDefault();
            }
        }
    });
}

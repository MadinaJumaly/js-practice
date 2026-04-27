export function createTip(tipText) {
    const section = document.createElement('section');
    section.classList.add('tip');
    section.tabIndex = 0;

    const title = document.createElement('h3');
    title.classList.add('tip__title');
    title.textContent = '💡 Tip of the day:';

    const text = document.createElement('p');
    text.classList.add('tip__text');
    text.textContent = tipText;

    const check = document.createElement('p');
    check.classList.add('tip__check', 'hidden');
    check.textContent = '✅Got it!';

    section.append(title, text, check);
    section.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            check.classList.toggle('hidden');
        }
        if (event.key === 'Escape') {
            const isConfirmed = confirm('Are you sure you want to remove this tip?');
            if (isConfirmed) {
                section.remove();
            }
        }
    });
    return section;
}

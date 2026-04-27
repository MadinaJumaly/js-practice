export function addSelection() {
    const container = document.querySelector('.add-selection');
    if (!container) return;
    container.addEventListener('click', function (event) {
        const item = event.target.closest('.selectable-item');
        if (!item) return;
        const isCtrl = event.ctrlKey || event.metaKey;
        if (isCtrl) {
            item.classList.toggle('selected');
        } else {
            const allItems = container.querySelectorAll('.selectable-item');
            allItems.forEach(el => el.classList.remove('selected'));
            item.classList.add('selected');
        }
    });
}

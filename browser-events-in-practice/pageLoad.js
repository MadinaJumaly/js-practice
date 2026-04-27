export function pageLoad() {
    window.addEventListener('load', () => {
        const mark = document.createElement('div');
        mark.classList.add('page-load-mark');
        mark.textContent = '✅ Page loaded successfully';
        document.body.prepend(mark);
    });
    window.onbeforeunload = function () {
        return false;
    };
}
export function isElementVisible(element) {
    if (element == null) {
        return false;
    }
    if (element.offsetWidth === 0 && element.offsetHeight === 0) {
        return false;
    }
    return true;
}

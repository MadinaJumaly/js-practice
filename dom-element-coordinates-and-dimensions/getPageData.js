export function getPageData() {

    const windowHeight = document.documentElement.clientHeight;
    const windowWidth = document.documentElement.clientWidth;

    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );

    const documentWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
    );

    const currentScrollFromTop = window.pageYOffset;
    const currentScrollFromLeft = window.pageXOffset;

    return {
        windowHeight,
        windowWidth,
        documentHeight,
        documentWidth,
        currentScrollFromTop,
        currentScrollFromLeft
    }
}

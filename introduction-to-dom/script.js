function getClassArray() {
    classArray = [];
    const wrapper = document.getElementById("task1");
    const elements = wrapper.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (!element.classList.contains("paragraph_hidden")) {
            classArray.push(...element.classList);
        }
    }
    return classArray;
}

function addContentToContainer(data) {
    const container = document.getElementById("task2");
    if (container) {
        container.innerHTML = data;
    }
}

function removeHiddenParagraphs() {
    const container = document.getElementById('task3');
    const elements = container.querySelectorAll('.paragraph_hidden');
    const count = elements.length;
    elements.forEach((el) => {
        el.remove();
    });
    return count;
}

function setDataAttr() {
    const container = document.getElementById('task4')
    const elements = container.querySelectorAll('*')
    elements.forEach((el) => {
        if (el.children.length > 0){
            el.setAttribute('data-type', 'container');
        } else {
            el.setAttribute('data-type', 'text');
        }
    });
}

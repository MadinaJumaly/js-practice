function addNumber(arr, num) {
    if (num === 0 || isNaN(num)) {
        return arr;
    }
    if (num < 0) {
        arr.push(num);
    } else {
        arr.unshift(num);
    }
    return arr;
}

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => 
    Object.is(value, arr2[index]));
}

function getNumberOfEven(arr) {
  return arr.filter(v => typeof v === "number" && 
    v % 2 === 0).length;
}

function getSubarray(arr, data) {
    const index = arr.indexOf(data);
    if (index === -1) return [];
    return arr.slice(0, index + 1);
}

function getDuplicateValues(arr) {
  return arr.filter((item, index) => {
    const firstIndex = arr.findIndex(value => Object.is(value, item));
    const lastIndex = arr.findLastIndex(value => Object.is(value, item));

    return firstIndex !== lastIndex && index === firstIndex;
  });
}

function getMaxNumbers(arr) {
  return arr.map(sub => Math.max(...sub));
}

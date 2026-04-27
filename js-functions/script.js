function sumSequence(n) {
    if (n === 0) {
        return "0.00";
    }
    
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / Math.pow(2, i);
    }
    
    return sum.toFixed(2);
}

function mergeArrays(...arrays) {
    return [].concat(...arrays);
}

// Test the function
console.log(mergeArrays([1, 2], [3, 4])); // [1, 2, 3, 4]
console.log(mergeArrays([1, 2], [3, 4], [5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays()); // []

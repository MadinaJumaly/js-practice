function isEvenOrOdd(num) { 
    
    if (num % 2 === 0) { 
        return 'The number ' + num + ' is even'; 
    } else {
        return 'The number ' + num + ' is odd'; 
    }

} 

function rangeSum(a, b) { 

    let sum = 0; 
    for (let i = a; i <= b; i++) { 
        sum += i; 
    } 
    return sum;

} 

function sumExclude(num, n) { 

    let sum = 0; 
    for (let i = 1; i <= num; i++) { 
        if (i % n !== 0) { 
            sum += i; 
        } 
    } 
    return sum; 

} 

function calcSimple(num1, num2, operator) {
    switch (operator) {
        case '+':
            return `${num1}+${num2}=${num1 + num2}`;
        case '-':
            return `${num1}-${num2}=${num1 - num2}`;
        case '*':
            return `${num1}*${num2}=${num1 * num2}`;
        case '/':
            return `${num1}/${num2}=${num1 / num2}`;
        default:
            return 'invalid operator';
    }
}

function makeRulerStr(length) {
    if (length === 0) {
        return "0";
    }

    let result = "0";
    const marks = "'''''''''";

    for (let i = 1; i <= length; i++) {
        result += marks + i;
    }

    return result;
}



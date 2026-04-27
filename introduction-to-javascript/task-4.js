"use strict";

function toSquare(num) {
    const userInput = prompt('Please enter a number', '');
    num = parseInt(userInput);
    return num * num;
}

const result = toSquare();

console.log(result);
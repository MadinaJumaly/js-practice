function isValid(name) {
  /* if (name.includes(' ')) {
    return false;
  } else {
    return true;
  } */

  return !name.includes(' ');
}

function countChars(str) {
    str = str.trim();
    if (str === '') {
        return 0;
    }
    return str.length;
}

function sum(a, b) {
    a = Number(a);
    b = Number(b);
    return a + b;
}

function formatMoney(amount) {
    amount = parseFloat(amount);
    if (isNaN(amount)) {
        throw new Error("Invalid amount");
    }
    return '$' + amount.toFixed(2);
}

function convertToBoolean(value) {
    return Boolean(value);
}

/*
function factorial(number) {
    var i, t;
    while (i <= number) {
        t = t * i;
        i++;

    }
    return t;
}
const getFactorial = factorial(7);
console.log(getFactorial);
*/

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

var a = factorial(7);
console.log(a);


/*function factorial(number) {
    var i, t = 1;
    for (i = 1; i <= number; i++) {
        t = t * i;

    }

    return t;
}
var getFactorial = factorial(7);
console.log(getFactorial);
*/

function ifactorial(number) {
    var i, t;
    while (i <= number) {
        t = t * i;
        i++;

    }
    return t;
}
const getFactorial = ifactorial(7);
console.log(getFactorial);


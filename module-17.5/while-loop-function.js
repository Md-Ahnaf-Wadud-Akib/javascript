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
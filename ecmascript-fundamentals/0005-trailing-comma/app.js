function sum(...theArgs) {
    return theArgs.reduce((previous, current) => previous + current);
}

const result = sum(1 * 2 ** 5,
    0 * 2 ** 4,
    1 * 2 ** 3,
    0 * 2 ** 2,
    1 * 2 ** 1,
    0 * 2 ** 0,);
console.log(result);

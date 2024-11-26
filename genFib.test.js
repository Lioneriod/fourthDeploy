const genFib = require('./genFib.js');

//Fib Tests
const genFibTestRes1 = genFib(3);
const genFibTestEq1 = '0, 1, 1';
test('Contagem em fibonacci até 3', () => {
    expect(genFibTestRes1).toEqual(genFibTestEq1);
})

const genFibTestRes2 = genFib(6);
const genFibTestEq2 = '0, 1, 1, 2, 3';
test('Contagem em fibonacci até 6', () => {
    expect(genFibTestRes2).toEqual(genFibTestEq2);
})
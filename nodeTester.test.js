const counter = require('./counter.js');
const genFib = require('./genFib.js');
const mdc = require('./mdc.js');
const order = require('./order.js');
const primeCheck = require('./primeCheck.js');
const totalSum = require('./totalSum.js');

// Counter tests
const counterTestRes1 = counter(20);
const counterTestEq1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
test('Contando até 20', () => {
    expect(counterTestRes1).toEqual(counterTestEq1);
});

const counterTestRes2 = counter(1);
const counterTestEq2 = [1];
test('Contando até 1', () => {
    expect(counterTestRes2).toEqual(counterTestEq2);
});

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

//MDC Tests
const mdcTestRes1 = mdc([6,10]);
const mdcTestEq1 = 2;
test('MDC de 6 a 10', () => {
    expect(mdcTestRes1).toEqual(mdcTestEq1);
})

const mdcTestRes2 = mdc([23,45]);
const mdcTestEq2 = 1;
test('MDC de 23 a 45', () => {
    expect(mdcTestRes2).toEqual(mdcTestEq2);
})

//Order Tests
const orderTestRes1 = order([20,100,2,4,55,13,47,89,1]);
const orderTestEq1 = [1, 2, 4, 13, 20, 47, 55, 89, 100];
test('Ordenando com números positivos', () => {
    expect(orderTestRes1).toEqual(orderTestEq1);
})

const orderTestRes2 = order([-1,5,-3,20,8,7,-150,-5489,23]);
const orderTestEq2 = [-5489, -150, -3, -1, 5, 7, 8, 20, 23];
test('Ordenando de com números negativos', () => {
    expect(orderTestRes2).toEqual(orderTestEq2);
})

//Prime Tests
const primeCheckTestRes1 = primeCheck(2);
const primeCheckTestEq1 = "É primo";
test('Checando com um número primo', () => {
    expect(primeCheckTestRes1).toEqual(primeCheckTestEq1);
})

const primeCheckTestRes2 = primeCheck(4);
const primeCheckTestEq2 = "Não é primo";
test('Checando com um número não primo', () => {
    expect(primeCheckTestRes2).toEqual(primeCheckTestEq2);
})

//Sum Tests
const totalSumTestRes1 = totalSum([50,100,25,1]);
const totalSumTestEq1 = 176;
test('Soma com números positivos', () => {
    expect(totalSumTestRes1).toEqual(totalSumTestEq1);
})

const totalSumTestRes2 = totalSum([-100,45,1,6]);
const totalSumTestEq2 = -48;
test('Soma com números negativos', () => {
    expect(totalSumTestRes2).toEqual(totalSumTestEq2);
})


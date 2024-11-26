const primeCheck = require('./primeCheck.js');

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
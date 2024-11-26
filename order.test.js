const order = require('./order.js');

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
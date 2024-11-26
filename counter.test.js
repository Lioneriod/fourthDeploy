const counter = require('./counter.js');

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
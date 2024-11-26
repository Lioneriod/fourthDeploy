const totalSum = require('./totalSum.js');

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


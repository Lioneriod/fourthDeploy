const mdc = require('./mdc.js');

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
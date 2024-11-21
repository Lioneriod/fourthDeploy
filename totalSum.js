//Total sum
function totalSum(n) {
    let numberSum = n.reduce((a, b) => a + b);
    return numberSum;
}
module.exports = totalSum;
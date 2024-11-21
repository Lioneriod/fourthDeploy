//Prime number
function primeCheck(input) {
    let primeResult = "É primo";
    for (let i = 0; i < input; i++) {
      if (input % i === 0 && i != input && i != 1) {
        primeResult = "Não é primo";
      }
    }
    return primeResult;
  }
module.exports = primeCheck;
//MDC
// Input tem que ser 2 números divididos por vírgulas
function mdc(input){
    let sorted = input.sort((a, b) => a - b);
    let mdc = 0;
    if (sorted[1] % sorted[0] === 0) {
      mdc = sorted[0];
    } else {
      for (let i = 0; i < sorted[0]; i++) {
        if (sorted[1] % i === 0 && sorted[0] % i === 0) {
          mdc = i;
        }
      }
    }
    return mdc;
  }
module.exports = mdc
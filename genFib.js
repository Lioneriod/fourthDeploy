//Fibbonacci
function genFib(n) {
  if(n > 3){
    n = parseInt(n);
    let fib1 = 0;
    let fib2 = 1;
    let fibTemp;
    let fibList = [];
    let i = 3;
    while (i < n) {
      fibTemp = fib1 + fib2;
      fibList.push(fibTemp);
      fib1 = fib2;
      fib2 = fibTemp;
      i++;
    }
    return `0, 1, ${fibList.join(", ")}`;
  }else{
    switch(n){
      case 0: 
        return '0';
      case 1:
        return '0'
      case 2:
        return '0, 1'
      case 3: 
        return '0, 1, 1'
    }
    }
  }
module.exports = genFib
//Order
function order(n) {
    let sorted = n.sort((a, b) => a - b);
    return sorted;
  }
module.exports = order;
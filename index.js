/*

sum(1, 3) = 1 + 2 + 3;      // 6
sum(1, 3) = 1 + (1 + 1) + (1 + 1 + 1);

*/
function sum(fromN, toN) {
  if (fromN === toN) {
    return toN; // end
  }
  return fromN + sum(fromN + 1, toN)
}

console.log(sum(3, 7));
module.exports = sum;

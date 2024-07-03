// Count the number of digits of a number

function numberOfDigits(num) {
  let count = 0;
  let copiedNum = num;

  while (copiedNum > 0) {
    count++;
    copiedNum = Math.floor(copiedNum / 10);
  }
  return count;
}

console.log(numberOfDigits(127));

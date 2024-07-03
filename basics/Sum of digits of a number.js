//Sum of digits of a number

function calculateSumOfDigits(num) {
  let sum = 0;
  let copiedNum = num;

  while (copiedNum > 0) {
    let lastDigit = copiedNum % 10;
    sum += lastDigit;
    copiedNum = Math.floor(copiedNum / 10);
  }
  return sum;
}

console.log(calculateSumOfDigits(1234));

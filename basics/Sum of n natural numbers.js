//Sum of all natural numbers from 1 to n

function calculateSum(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(calculateSum(5));

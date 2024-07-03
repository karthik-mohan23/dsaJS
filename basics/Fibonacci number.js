// Find nth Fibonacci number
//  0,    1,    1, 2,3,5,8,13,21...
//F(0), F(1), F(2),..

function findFibonacciNumber(n) {
  if (n <= 1) {
    return n;
  }

  let prev = 0;
  let current = 1;
  let next = 0;

  for (let i = 2; i <= n; i++) {
    next = prev + current;
    prev = current;
    current = next;
  }

  return next;
}

console.log(findFibonacciNumber(0));
console.log(findFibonacciNumber(1));
console.log(findFibonacciNumber(2));
console.log(findFibonacciNumber(5)); // 5
console.log(findFibonacciNumber(10)); // 55

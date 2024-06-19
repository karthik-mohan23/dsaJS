// 1
// 1 2
// 1 2 3
// 1 2 3 4

function printPattern(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    let num = 1;
    for (let j = 0; j <= i; j++) {
      //   pattern += j + 1;
      pattern += num;
      num = num + 1;
    }
    pattern += "\n";
  }
  return pattern;
}

console.log(printPattern(4));

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function printPattern(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    let num = 1;
    for (let j = n; j > i; j--) {
      pattern += " " + num;
      num += 1;
    }
    pattern += "\n";
  }
  return pattern;
}

console.log(printPattern(5));

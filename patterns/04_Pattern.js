// 1
// 2 2
// 3 3 3
// 4 4 4 4

function printPattern(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += i + 1;
    }
    pattern += "\n";
  }
  return pattern;
}

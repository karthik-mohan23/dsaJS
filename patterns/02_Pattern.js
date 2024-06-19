// X
// X X
// X X X
// X X X X

function printPattern(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  return pattern;
}

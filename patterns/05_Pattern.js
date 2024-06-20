// X X X X X
// X X X X
// X X X
// X X
// X

function printPattern(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      pattern += " X";
    }
    pattern += "\n";
  }
  return pattern;
}
console.log(printPattern(5));

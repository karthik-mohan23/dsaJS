// X
// XX
// XXX
// XXXX
// XXXXX
// XXXX
// XXX
// XX
// X

function generatePattern(n) {
  let pattern = "";
  for (let i = 1; i <= 2 * n - 1; i++) {
    let limit = i;
    if (i > n) {
      limit = 2 * n - i;
    }
    for (let j = 1; j <= limit; j++) {
      pattern += "X";
    }
    pattern += "\n";
  }
  return pattern;
}

console.log(generatePattern(5));

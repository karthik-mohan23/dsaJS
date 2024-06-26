//X X X X X X X
//  X X X X X
//    X X X
//      X

function generatePattern(n) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      pattern += " ";
    }
    for (let j = 0; j < 2 * (n - i) - 1; j++) {
      pattern += "X";
    }
    for (let j = 0; j < i; j++) {
      pattern += " ";
    }
    pattern += "\n";
  }
  return pattern;
}

console.log(generatePattern(4));

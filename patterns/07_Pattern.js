//      X
//    X X X
//  X X X X X
//X X X X X X X

function printPattern(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - (i + 1); j++) {
      pattern += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      pattern += "X";
    }
    for (let j = 0; j < n - (i + 1); j++) {
      pattern += " ";
    }
    pattern += "\n";
  }
  return pattern;
}

console.log(printPattern(4));

//================
//for n= 4
//{space,star,space}
// {3,1,3}
// {2,3,2}
// {1,5,1}
// {0,7,0}
//space = n - { i + 1 }
//star = (2 * row ) + 1

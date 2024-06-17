const reverseStr = (str) => str.split("").reverse().join("");

const reverseInt = (int) => {
  return Number(reverseStr(String(Math.abs(int)))) * Math.sign(int);
};

console.log(reverseInt(124));

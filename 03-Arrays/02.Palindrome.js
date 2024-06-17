const reverseStr = (str) => str.split("").reverse().join("");

const isPalindrome = (str) => {
  let reversedString = reverseStr(str);
  return str === reversedString;
};

console.log(isPalindrome("malayalam"));

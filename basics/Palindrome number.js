// Check if a number is palindrome

function checkPalindrome(num) {
  let copiedNum = num;
  let reversedNumStr = "";
  while (copiedNum > 0) {
    let lastDigit = copiedNum % 10;
    reversedNumStr += lastDigit;
    copiedNum = Math.floor(copiedNum / 10);
  }

  return num === +reversedNumStr;
}

console.log(checkPalindrome(121));

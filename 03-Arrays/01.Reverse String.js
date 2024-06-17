// function reverseString(str) {
//     const strLength = str.length;
//     let reversedString = "";
//     for (let i = strLength-1; i >= 0; i--) {
//       reversedString += str[i];
//     }
//     return reversedString;
//   }

// ========================================

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("Hello"));

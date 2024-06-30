// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

// function removeDuplicates(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i + 1, 1);
//       i--;
//     }
//   }
//   return arr.length;
// }

// 2 pointer approach
function removeDuplicates(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return i + 1;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

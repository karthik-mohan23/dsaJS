// Rotate an array by k.
// Given an integer array nums, rotate the array to right by k steps.
//  where k is non negative.

// Input : nums: [1,2,3,4,5,6,7], k= 3 => output: [5,6,7,1,2,3,4]

function rotateByK(arr, k) {
  const arrLength = arr.length;
  if (k > arrLength) {
    k = k % arrLength;
  }

  const copiedArr = arr;
  const startingIndex = arrLength - k;
  const slicedArr = copiedArr.splice(startingIndex);
  return [...slicedArr, ...copiedArr];
}

console.log(rotateByK([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateByK([1, 2, 3, 4, 5, 6, 7], 8));
console.log(rotateByK([-1, -100, 3, 99], 2));

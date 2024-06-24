//Find the 2nd largest number from the array

//Input : [12,35,1,10,34,1] => 34

const arr1 = [12, 35, 1, 10, 34, 1];

const findSecondLargest = (arr) => {
  let largest = arr[0];
  let secondLargest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr1[i] < largest) {
      // Update secondLargest if current element is between largest and secondLargest
      secondLargest = arr1[i];
    }
  }
  return secondLargest;
};

console.log(findSecondLargest(arr1));

// The condition && arr[i] < largest is necessary to ensure that the element being considered for secondLargest is indeed less than the current largest element. Without this condition, you could incorrectly update secondLargest to the same value as largest, which would be incorrect if the largest number appears more than once in the array.

// const findSecondLargest = (arr) => {
//   const uniqueArr = Array.from(new Set(arr));

//   const sortedArr = uniqueArr.sort((a, b) => b - a);

//   if (sortedArr.length === 1) {
//     return sortedArr[0];
//   } else {
//     return sortedArr[1];
//   }
// };

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function findMajorityElement(arr) {
  let storeObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (storeObj[arr[i]]) {
      storeObj[arr[i]] = storeObj[arr[i]] + 1;
    } else {
      storeObj[arr[i]] = 1;
    }
  }

  for (let key in storeObj) {
    if (storeObj[key] > arr.length / 2) {
      return +key;
    }
  }
}

console.log(findMajorityElement([3, 2, 3]));

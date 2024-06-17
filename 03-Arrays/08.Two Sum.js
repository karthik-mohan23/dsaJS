//Imagine you have a list of numbers and a target number.
//Your job is to find 2 numbers in that list that adds upto the target number.
//You also need to tell which positions(or indexes) those 2 numbers are on the list

//[2,7,11,15], target = 9
// output => [0,1]

// function findTwoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//           return [i, j];
//         }
//       }
//     }
//     return null; // Return null if no pair is found
//   }

//   const nums = [2, 7, 11, 15];
//   const target = 9;
//   const result = findTwoSum(nums, target);

//   console.log(result); // Output: [0, 1]

function findTwoNumbersThatSumToTarget(numbers, targetSum) {
  const seenNumbers = {}; // Create an object to store the indices of the numbers

  for (let currentIndex = 0; currentIndex < numbers.length; currentIndex++) {
    const currentNumber = numbers[currentIndex];
    const neededNumber = targetSum - currentNumber;

    // Check if the needed number (targetSum - currentNumber) exists in the seenNumbers object
    if (seenNumbers[neededNumber] !== undefined) {
      return [seenNumbers[neededNumber], currentIndex]; // Return the indices of the two numbers
    }

    // Store the index of the current number in the seenNumbers object
    seenNumbers[currentNumber] = currentIndex;
  }

  return null; // Return null if no pair is found
}

const numbers = [2, 7, 11, 15];
const targetSum = 9;
const result = findTwoNumbersThatSumToTarget(numbers, targetSum);

console.log(result); // Output: [0, 1]

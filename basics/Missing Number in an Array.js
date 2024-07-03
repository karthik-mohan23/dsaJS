// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Input : [3,0,1] , Output => 2
// Input : [9,6,4,2,3,5,7,0,1] , Output => 8

function findMissingNumber(arr) {
  const sumFromArrLength = arr.length * ((arr.length + 1) / 2);

  const sumOfArrElements = arr.reduce((acc, current) => {
    return acc + current;
  }, 0);

  return sumFromArrLength - sumOfArrElements;
}

console.log(findMissingNumber([0, 1, 3]));

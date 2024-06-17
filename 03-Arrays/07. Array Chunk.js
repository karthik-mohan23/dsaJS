//Write a function that takes an array and chunk size as input. The function should return a new array where the original array is split into chunks of the specified size.

//chunkArray([1,2,3,4,5,6,7,8],3) => [[1,2,3],[4,5,6],[7,8]]
//chunkArray([1,2,3,4,5],2) => [[1,2],[3,4]]

const chunkArray = (arr, size) => {
  let store = [];
  let index = 0;

  for (let i = 0; index < arr.length; i++) {
    let slicedArr = arr.slice(index, size + index);
    store.push(slicedArr);
    index += size;
  }
  return store;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));

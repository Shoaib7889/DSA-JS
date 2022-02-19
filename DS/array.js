const maxSubArray = (arr, size) => {
  let currSum = 0;
  let maxSum = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    if (i >= size - 1) {
      maxSum = Math.max(maxSum, currSum);
      currSum -= arr[i - (size - 1)];
    }
  }
  return maxSum;
};
let arr = [1, 10, 3, 4, 5];
cl(maxSubArray(arr, 2));

/*

cl func

*/
function cl(params) {
  console.log(params);
}

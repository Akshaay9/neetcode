const getSum = (arr, startIdx, endIdx) => {
    let result = 0;
    for (let i = startIdx; i <= endIdx; i++) {
      result += arr[i];
    }
    return result;
  };
  
  var pivotIndex = function (nums) {
    // checking first index
    if (getSum(nums, 1, nums.length - 1) === 0) {
      return 0;
    }
  
    for (let i = 1; i < nums.length; i++) {
      const sumOfLeft = getSum(nums, 0, i - 1);
      const sumOfRight = getSum(nums, i + 1, nums.length - 1);
      if (sumOfLeft === sumOfRight) {
        return i;
      }
    }
  
    //  Checking last index
    if (getSum(nums, 0, nums.length - 2) === 0) {
      return nums.length - 1;
    }
    return -1;
  };
var twoSum = function (nums, target) {
    const map = new Map();
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
      const currEle = nums[i];
      const checkIfDiffExist = target - currEle;
      if (map.has(checkIfDiffExist)) {
        result.push(map.get(checkIfDiffExist));
        result.push(i);
      } else {
        map.set(currEle, i);
      }
    }
    return result;
  };
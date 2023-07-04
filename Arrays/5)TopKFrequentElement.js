var topKFrequent = function (nums, k) {
    const map = new Map();
    const result = [];
    const frequecyArr = Array(nums.length + 1).fill([]);
  
    for (let num of nums) {
      map.set(num, (map.get(num) || 0) + 1);
    }
    for (const [key, value] of map) {
      frequecyArr[value] = [...frequecyArr[value], key];
    }
  
    for (let i = frequecyArr.length - 1; i >= 0; i--) {
      if (frequecyArr[i].length > 0) {
        result.push(...frequecyArr[i]);
      }
      if (result.length === k) break;
    }
  
    return result;
  };
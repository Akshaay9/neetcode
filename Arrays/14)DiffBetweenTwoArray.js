var findDifference = function (nums1, nums2) {
    const mapOne = new Map();
    const mapTwo = new Map();
    const result = [];
  
    nums1.forEach((ele) => {
      mapOne.set(ele, (mapOne.get(ele) || 0) + 1);
    });
    nums2.forEach((ele) => {
      mapTwo.set(ele, (mapTwo.get(ele) || 0) + 1);
    });
  
    let tempResultOne = [];
    nums1.forEach((ele) => {
      if (!mapTwo.has(ele)&& !tempResultOne.includes(ele)) {
        tempResultOne.push(ele);
      }
    });
    result.push(tempResultOne);
  
    let tempResultTwo = [];
    nums2.forEach((ele) => {
      if (!mapOne.has(ele) && !tempResultTwo.includes(ele)) {
        tempResultTwo.push(ele);
      }
    });
    result.push(tempResultTwo);
  
    return result;
  };
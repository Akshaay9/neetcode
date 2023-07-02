var trap = function (height) {
    let ans = 0;
    const leftMostMaxEle = [];
    const rightMostMaxEle = [];
  
    for (let i = 0; i < height.length; i++) {
      //  if i===0 then no left most max element
      if (i === 0) {
        leftMostMaxEle.push(0);
      } else {
        // compare last element of arr[i-1] && leftMostMaxEle.length-1
        leftMostMaxEle.push(
          Math.max(height[i - 1], leftMostMaxEle[leftMostMaxEle.length - 1])
        );
      }
    }
  
    //    Repeat for reversed order for right element
  
    for (let i = height.length - 1; i >= 0; i--) {
      if (i === height.length - 1) {
        rightMostMaxEle.push(0);
      } else {
        rightMostMaxEle.push(
          Math.max(height[i + 1], rightMostMaxEle[rightMostMaxEle.length - 1])
        );
      }
    }
    //    Reverse rightMostMaxEle since we came from backwards we need to entry it backwards
    rightMostMaxEle.reverse();
  
    height.forEach((ele, idx) => {
      const leftMostEle = leftMostMaxEle[idx];
      const rightMostEle = rightMostMaxEle[idx];
  
      const tempAns = Math.min(leftMostEle, rightMostEle) - ele;
      if (tempAns > 0) {
        ans += tempAns;
      }
    });
  
    return ans;
  };
  
  console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
  
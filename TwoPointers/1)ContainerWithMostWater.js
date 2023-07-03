//  BRUTE FORCE

var maxArea = function (heights) {
    let maxArea = 0;
  
    for (let i = 0; i < heights.length; i++) {
      for (let j = i + 1; j < heights.length; j++) {
        // area=base * height
        const base = j - i;
        const height = Math.min(heights[j], heights[i]);
        maxArea = Math.max(maxArea, base * height);
      }
    }
    return maxArea;
  };
  
  console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

  // OPTIMAL 2 POINTERS 
  var maxArea = function (heights) {
    let start = 0;
    let end = heights.length - 1;
    let ans = 0;
  
    while (start < end) {
      const base = end - start;
      const height = Math.min(heights[start], heights[end]);
      ans = Math.max(ans, base * height);
      if (heights[start] < heights[end]) {
        start += 1;
      } else {
        end -= 1;
      }
    }
    return ans;
  };
  
  console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));


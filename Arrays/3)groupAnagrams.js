//  MY ACCEPTED CODE

const sortStr = (val) => {
    val = val.split("").sort((a, b) => a.localeCompare(b));
    return val.join("");
  };
  
  var groupAnagrams = function (arr) {
    const newArr = arr.map((ele) => sortStr(ele));
  
    const map = new Map();
    const result = [];
  
    for (let i = 0; i < newArr.length; i++) {
      const tempResult = [];
      let value = newArr[i];
      for (let j = i; j < newArr.length; j++) {
        if (map.has(newArr[i])) continue;
        if (newArr[i] === newArr[j]) {
          tempResult.push(arr[j]);
        }
      }
      map.set(value, true);
      if (tempResult.length > 0) {
        result.push(tempResult);
      }
    }
  
    return result;
  };



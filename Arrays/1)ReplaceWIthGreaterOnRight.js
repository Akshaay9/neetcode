var replaceElements = function (arr) {
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      result.push(-1);
    } else {
      console.log(result);
      result.unshift(Math.max(result[0], arr[i + 1]));
    }
  }
  return result;
};

const arr = [17, 18, 5, 4, 6, 1];

console.log(replaceElements(arr));

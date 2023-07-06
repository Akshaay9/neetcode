const getCommonStr = (str1, str2) => {
    let i = 0;
    let j = 0;
    let result = "";
    while (i < str1.length && j < str2.length) {
      if (str1[i] === str2[j]) {
        result += str1[i];
        i += 1;
        j += 1;
      } else {
        break;
      }
    }
    return result;
  };
  
  var longestCommonPrefix = function (str) {
    if (str.length === 1) {
      return str[0];
    }
    const result = [];
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        let commonStr = getCommonStr(str[i], str[j]);
        result.push(commonStr);
      }
    }
    console.log(result);
    return result.sort((a, b) => a.localeCompare(b))[0] || "";
  };
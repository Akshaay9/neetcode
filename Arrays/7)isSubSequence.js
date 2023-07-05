var isSubsequence = function (s, t) {
    if ( s.length > t.length) {
      return false;
    }
    let idx = -1;
    let totalLen = s.length;
    for (let i = 0; i < s.length; i++) {
      const eleS = s[i];
      for (let j = i; j < t.length; j++) {
        const eleT = t[j];
        if (eleS === eleT && j > idx) {
          idx = j;
          totalLen--;
          break;
        }
      }
    }
    return totalLen === 0;
  };

  // BETTER SOLUTION

  var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;
    while (i < s.length && j < t.length) {
      const currS = s[i];
      const currT = t[i];
      if (currS === currT) {
        i += 1;
        j += 1;
      } else {
        j += 1;
      }
    }
    return i === 1;
  };
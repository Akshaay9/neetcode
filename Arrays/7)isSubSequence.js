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
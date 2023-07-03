var isAnagram = function (s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const mapOne = new Map();
    const mapTwo = new Map();
  
    for (let i = 0; i < s.length; i++) {
      mapOne.set(s[i], (mapOne.get(s[i]) || 0) + 1);
    }
  
    for (let i = 0; i < t.length; i++) {
      mapTwo.set(t[i], (mapTwo.get(t[i]) || 0) + 1);
    }
  
    for (let i = 0; i < s.length; i++) {
      if (!mapTwo.get(s[i])) {
        return false;
      }
      if (mapOne.get(s[i]) !== mapTwo.get(s[i])) {
        return false;
      }
    }
    return true;
  };
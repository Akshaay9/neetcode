var wordPattern = function (pattern, target) {
    target = target.split(" ");
    const map = new Map();
    const mapTwo = new Map();
  
    if (pattern.length !== target.length) {
      return false;
    }
  
    for (let i = 0; i < pattern.length; i++) {
      const currPattern = pattern[i];
      const currTarget = target[i];
      if (map.has(currPattern)) {
        const getWordFromMap = map.get(currPattern);
        if (getWordFromMap !== currTarget) {
          return false;
        }
      } else {
        map.set(currPattern, currTarget);
      }
    }
  
    for (let i = 0; i < target.length; i++) {
      const currPattern = target[i];
      const currTarget = pattern[i];
      if (mapTwo.has(currPattern)) {
        const getWordFromMap = mapTwo.get(currPattern);
        if (getWordFromMap !== currTarget) {
          return false;
        }
      } else {
        mapTwo.set(currPattern, currTarget);
      }
    }
  
    return true;
  };
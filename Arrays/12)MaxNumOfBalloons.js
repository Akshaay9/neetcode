//  https://leetcode.com/problems/maximum-number-of-balloons/description/


var maxNumberOfBalloons = function (text) {
    const map = new Map();
    const BALLOONS = "balloon";
    let result = Infinity;
    let balloonC0unt = 0;
  
    for (let i = 0; i < text.length; i++) {
      const currKey = text[i];
      if (BALLOONS.includes(currKey)) {
        balloonC0unt += 1;
        map.set(currKey, (map.get(currKey) || 0) + 1);
      }
    }
  
    if (map.has("o")) {
      map.set("o", Math.floor(map.get("o") / 2));
    }
  
    if (map.has("l")) {
      map.set("l", Math.floor(map.get("l") / 2));
    }
  
    if (map.size !== 5 || balloonC0unt < 7) {
      return 0;
    }
  
    for (const [_, value] of map) {
      result = Math.min(value, result);
    }
  
    return result;
  };
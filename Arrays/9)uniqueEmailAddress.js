var numUniqueEmails = function (emails) {
    const map = new Set();
  
    for (let i = 0; i < emails.length; i++) {
      let [local, domain] = emails[i].split("@");
      let [doesntHavePlus, hasPlus] = local.split("+");
      doesntHavePlus = doesntHavePlus.replace(/\./g, "");
      map.add(`${doesntHavePlus}@${domain}`);
    }
  
    return map.size;
  };
var lcprefix = function (s) {

    if (s.length === 0) return "";
    s.sort();

    let first = s[0];
    let last = s[s.length - 1];

    let commonPrefix = "";

    for (let i = 0; i < Math.min(first.length, last.length); i++) {
        if (first[i] !== last[i]) {
           return commonPrefix;
        }

        commonPrefix += first[i];
    }
   
    return commonPrefix;
}

console.log("longest common prefix:" + lcprefix(["alok", "alaram", "allow"]));
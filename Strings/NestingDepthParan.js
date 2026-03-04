var maxDepth = function (s) {
    let counter = 0;
    let max = 0;
    for (let char of s) {
        if (char == '(') {
            counter++;
        } else if (char == ')') {
            counter--;
        }
        max = Math.max(max, counter);
    }
    //console.log(counter)

    return max;
}

console.log(maxDepth("((5+2)(c+e)((a)))"));
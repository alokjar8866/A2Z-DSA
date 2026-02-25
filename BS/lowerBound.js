var lowerBound = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
     let result = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] == target) {
            result = mid;
            high = mid - 1;
        }
        else if (target < nums[mid]) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }

    return result;
}

console.log(lowerBound([0,0,0,1,1,1],1));
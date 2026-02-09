var InsertPosition = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            low = mid + 1
        }
        else {
            high = mid - 1;
        }
    }
    return low;
}

console.log(InsertPosition([1, 4, 6, 7, 12, 15, 22, 24, 25, 30], 2));
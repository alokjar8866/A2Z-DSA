//Find the First and Last position of element in sorted array
//input: nums=[5,7,7,8,8,10] target = 8;

function firstOccurrence(arr, x) {
    let low = 0;
    let high = arr.length;
    let first = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == x) {
            first = mid;
            high = mid - 1;
        }
        else if (arr[mid] < x) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return first;
}

function lastOccurrence(arr, x) {
    let low = 0;
    let high = arr.length;
    let last = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == x) {
            last = mid;
            low = mid + 1;
        }
        else if (arr[mid] < x) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return low-1;
}



var searchRange = function (nums, target) {
    let first = firstOccurrence(nums,target);
    if(first == -1) return [-1,-1];

    let last = lastOccurrence(nums,target);

    return [first,last];

}

console.log(searchRange([1, 2, 2, 2, 3, 3, 3, 3, 4], 4));
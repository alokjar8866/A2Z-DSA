//Given an sorted array which rotated K times find the target in O(logn) time complexity
//It can have same values so returning index is not considered
//nums = [2,5,6,0,0,1,2] target = 0;
//output = true

function RotatedSortedArray(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == target) {
            return true;
        }
        if(arr[low]==arr[mid] && arr[mid] == arr[high]){
            low = low+1;
            high = high-1;
            continue;
        }
        if (arr[low] <= arr[mid]) {
            if (arr[low] <= target && target <= arr[mid])
                high = mid - 1;
            else
                low = mid + 1;
        }
        else{
            if (arr[mid] <= target && target <= arr[high])
                low = mid + 1;
            else
                high = mid - 1;
        }
    }

    return false;
}

console.log(RotatedSortedArray([7,8,9,1,2,3,4,5,6],6));
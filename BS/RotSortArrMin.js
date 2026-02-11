//Given an sorted array which rotated K times find the minimum in O(logn) time complexity
//input nums=[4,5,6,7,0,1,2]
//output 0  (mininum in nums)


function RotSortArrMin(nums){
    let low = 0;
    let high = nums.length - 1;
    let min = Infinity;

    while(low <= high){
        let mid = Math.floor((low + high)/2);

        if(nums[low] <= nums[mid]){
            min = Math.min(min, nums[low]);
            low = mid + 1;
        }
        else{
            min = Math.min(min, nums[mid]);
            high = mid - 1;
        }
    }

    return min;
}

console.log(RotSortArrMin([4,5,6,7,1,2]));
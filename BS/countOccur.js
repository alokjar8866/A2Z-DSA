var firstOccur = function(nums,target){
    let firstOcc = -1;
    let low = 0;
    let high = nums.length - 1;
    
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid] == target){
            firstOcc = mid;
            high = mid - 1;
        }
        else if(nums[mid] < target){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    
    return firstOcc;
}


var lastOccur = function(nums,target){
    let lastOcc = -1;
    let low = 0;
    let high = nums.length - 1;
    
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid] == target){
            lastOcc = mid;
            low = mid + 1;
        }
        else if(nums[mid] < target){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    
    return lastOcc;
}

let first = firstOccur([5,7,7,8,8,10],8);
let last = lastOccur([5,7,7,8,8,10],8);

console.log(first,last)

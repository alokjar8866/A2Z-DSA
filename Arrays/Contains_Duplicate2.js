//un optimal way brute force
/* var ContainDuplicate = function(nums,k){
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i]==nums[j] && Math.abs(i-j)<=k){
                return true;
            }
        }
    }
    return false;
}

console.log(ContainDuplicate([1,2,3,1,2,3],2)); */


// optimal way using sets 
var containsNearbyDuplicate = function(nums, k) {
    const seen = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true;
        }
        seen.add(nums[i]);
        if (seen.size > k) {
            seen.delete(nums[i - k]);
        }
    }

    return false;
};



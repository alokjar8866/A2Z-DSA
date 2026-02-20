/**class Solution {
    smallestDividor(nums, limit) {
        const n = nums.length;

        let maxVal = Math.max(...nums);
        for (let d=1; d<maxVal; d++) {
            let total = 0;
            for (let i = 0; i<n; i++){
                total+=Math.ceil(nums[i]/d);
            }

            if(total <= limit){
                return d
            }
        }

        return -1;
    }
}


const arr = [1,2,5,9];
const limit = 6;
const obj = new Solution();
const ans = obj.smallestDividor(arr,limit);
console.log("The minimum divisor is "+ ans); **/

// For smaller value brute force is good but for avoid time limit exceed we implement BS method

var smallestDivisor = function(nums,threshold){
    function sumByD(arr,div){
        let sum = 0;
        for(let num of arr){
            sum+=Math.ceil(num/div);
        }
        return sum;
    }

    if(nums.length>threshold) return -1;

    let low =1;
    let high = Math.max(...nums);

    while(low<=high){
        let mid = Math.floor((low+high)/2);
        let sum = sumByD(nums,mid);

        if(sum<=threshold){
            high = mid -1 ;
        }
        else{
            low = mid + 1;
        }
    }
    return low;
}
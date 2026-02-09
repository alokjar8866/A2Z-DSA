var FindFloorCeil = function(nums,target){
    let floor = -1;
    let ceil = -1;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i]==target){
            return [nums[i],nums[i]];
        }

        if(nums[i] < target){
            floor = nums[i];
        }
        else{
            ceil = nums[i];
            break;
        }

    }

   return [floor,ceil];
    
}

console.log(FindFloorCeil([1,2,3,5,6],0))
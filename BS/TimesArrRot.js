//Given an sorted array which rotated K times find the K in O(logn) time complexity
//input nums=[4,5,6,7,0,1,2]
//output 4  (Sorted Array is rotated to right 4 times)

function TimesArrRot(arr){
    let low = 0;
    let high = arr.length - 1;
    let min = Infinity;
    //let index = -1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);

        if(arr[low] <= arr[mid]){
            //min = Math.min(min, nums[low]);
            if(arr[low] < min){
                index = low;
                min = arr[low]
            }
           
            low = mid + 1;
        }
        else{
            if(arr[mid] < min){
                index = low;
                min = arr[mid]
            }
           
            high = mid - 1;
        }
    }

  
    return index;
}

console.log(TimesArrRot([4,5,6,7,0,1,2,3]));
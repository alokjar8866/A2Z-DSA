let singleNumber = function(nums){
    let result = 0;
    for( let num of nums){
        //using XOR method
        result ^= num;

    }

    return result;
}

console.log(singleNumber([3,2,1,2,1]));
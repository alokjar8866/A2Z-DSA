//Given that 2D array of m*n and have to find the target in log(m*n)

var Arr2DSearch = function (arr, target) {
    let n = arr.length;
    let m = arr[0].length;
    let low = 0;
    let high = m * n - 1;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        let row = Math.floor(mid / m);
        let col = mid % m;

        if(arr[row][col]==target) return true;
        else if(arr[row][col]<target) low = mid + 1;
        else high = mid - 1;
    }
    return false
}

console.log(Arr2DSearch([[1,2,3],[,4,5,7],[7,8,9]],7));
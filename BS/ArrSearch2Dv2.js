var Search2DArr = function(matrix,target){
    let n = matrix.length;
    let m = matrix[0].length;
    let row = 0;
    let col = m - 1;

    while(row<n && col >= 0){
        let current = matrix[row][col];

        if(current===target) return true;
        else if(current<target) row++;
        else col--;
    }

    return false;
}

console.log(Search2DArr([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],5))
var PeakEle2DArr = function (mat) {
    let startCol = 0;
    let endCol = mat[0].length - 1;

    while (startCol <= endCol) {
        let midCol = Math.floor((startCol + endCol) / 2);

        let maxRow = 0;
        for (let row = 0; row < mat.length; row++) {
            if (mat[row][midCol] > mat[maxRow][midCol]) {
                maxRow = row;
            }
        }

        let leftIsLarger = midCol > startCol && mat[maxRow][midCol - 1] > mat[maxRow][midCol];
        let rightIsLarger = midCol < endCol && mat[maxRow][midCol + 1] > mat[maxRow][midCol];

        if(!leftIsLarger && !rightIsLarger){
            return [maxRow,midCol];
        }
        else if(rightIsLarger){
            startCol = midCol + 1;
        }
        else{
            endCol = midCol - 1;
        }

    }

    return [-1,-1];


}


console.log(PeakEle2DArr([[10, 20, 15], [21, 30, 14], [7, 16, 32]]));
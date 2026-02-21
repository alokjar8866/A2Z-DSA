var ParcelWeight = function (weight, days) {
    function DaysNeed(weight, capacity) {
        let days = 1;
        let currentLoad = 0;
        for (let w of weight) {
            if (currentLoad + w > capacity) {
                days++;
                currentLoad = w;
            }
            else {
                currentLoad += w;
            }
        }
        return days;
    }

    let low = Math.max(...weight);
    let high = weight.reduce((a,b)=>a+b,0);

    while(low <= high){
        let mid = Math.floor((low + high)/2);
        let needed = DaysNeed(weight,mid);

        if(needed<=days){
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return low;
}

console.log(ParcelWeight([5,4,5,2,3,4,5,6],5));
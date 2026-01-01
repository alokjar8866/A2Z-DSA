function plus1(digits){
    let num=BigInt(digits.join(""));
    num++;
    console.log(num);
    let arr=Array.from(String(num),Number);
    console.log(arr);
    return num;
}

console.log(plus1([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
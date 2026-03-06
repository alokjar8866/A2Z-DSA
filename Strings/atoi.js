var atoi = function (s) {
    let i = 0;
    let sign = 1;
    let result = 0;

    const INT_MAX = 2147483647; //limit for 32-bit integer
    const INT_MIN = -2147483648;

    while (s[i] === ' ') i++;

    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    while (i < s.length ) {
       
        if (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && digit > 7)) {
            return sign===1?INT_MAX:INT_MIN;
        }
        const char = s[i];

        if(char>='0'&&char<='9'){
            let digit = char - '0';
            result=result*10+digit;
            i++;
        }else{
            break;
        }

        
    }

    return result*sign;
}

console.log(atoi("99999999999999"));
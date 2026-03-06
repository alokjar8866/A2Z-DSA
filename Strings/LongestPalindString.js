var PalindromSubString = function(s){
    if(s.length<1) return "";
    let longest = "";

    const expandFromCenter = (s,left,right)=>{
        while(left>=0 && right<s.length && s[left]==s[right]){
            left--;
            right++;
        }

        return s.slice(left+1,right);
    }
    
    for (let i = 0; i < s.length; i++) {
        const oddPal = expandFromCenter(s,i,i);
        const evenPal = expandFromCenter(s,i,i+1);

        if(oddPal.length>longest.length) longest = oddPal;
        if(evenPal.length > longest.length) longest = evenPal;
    }

    return longest;
}


console.log(PalindromSubString("ababd"));
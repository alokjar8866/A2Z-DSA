var rotateString = function(s,goal){
    if(s.length !== goal.length){
        return false;
    }

    for (let i = 0; i < s.length; i++) {
       let rotated = s.substring(i) + s.substring(0,i);

       if(rotated === goal){
        return true;
       }
    }

    return false;
} 

var rotateStr = function(s,goal){
     if(s.length !== goal.length){
        return false;
    }
    
    let doubled = s + s;

    if(doubled.includes(goal)){
        return true;
    }
    else{
        return false;
    }
}

console.log(rotateString("alok","kalo"));
console.log(rotateStr("alok","kalo"));
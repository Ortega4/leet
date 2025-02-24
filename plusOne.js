var plusOne = function(digits){
    for(let i=digits.length-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]++;
            return digits;
        }
        digits[i]=0;

    }
    digits.unshift(1);
    return digits;
}
console.log(plusOne([1,2,9]));



// non function attempt


let digit =[1,2,9];

for(let i = digit.length-1; i>=0;i--){
    if(digit[i]!=9){
        digit[i]++;
        break;
        
    }
    digit[i]=0;
    if(digit[0]===0){
        digit.unshift(1);
    }
    
        
    
    
}

console.log(digit);

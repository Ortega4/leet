let nums = [1,3,5,6];

let index = 0;
let target = 7;

let left = 0;
let right = nums.length-1;


while(left<=right){
    let middle = Math.floor(left+ (right-left)/2);
    if(nums[middle]===target){
        index = middle;
        break;
        
    }
    else if(target>nums[middle]){
        left = middle +  1;
    }
    else if(target<nums[middle]){
        right = middle-1;
    }
    
}
if(left>right){
    index= left;
}
//console.log(index);


//function method 
var searchInsert = function(nums,target){

  
let left = 0;
let right = nums.length-1;


while(left<=right){
    let middle = Math.floor(left+ (right-left)/2);
    if(nums[middle]===target){
        return middle;
       
        
    }
    else if(target>nums[middle]){
        left = middle +  1;
    }
    else if(target<nums[middle]){
        right = middle-1;
    }
    
}
    return left;
}

console.log(searchInsert(nums,4));
let nums = [3,2,2,3];
let val = 3;

var remvVal = function(nums,val) {
    let k = 0;
    for(let i=0;i<nums.length;i++){
        if((nums[i]!=val)){
            nums[k]=nums[i];
            k++;
        }

    }
    for(let i=k; i<nums.length;i++){
        nums[i]="_";

    }
    
}

remvVal(nums,val);
console.log(nums);


/*
    above is slightly less time-efficient than the below one

    First Loop: Both versions have a loop that iterates through the array once, which is 
O(n)
O(n) in time complexity.
Second Loop: Your reworked version adds a second loop to replace the remaining elements with "_", which is also 
O(n)
O(n) in time complexity.
So, the total time complexity of your reworked version is 
O(n)+O(n)=O(2n)
O(n)+O(n)=O(2n), which simplifies to 
O(n)
O(n). However, in practice, the second loop adds extra operations, making it slightly less efficient than the first version, which only has a single loop and a resizing operation.






let nums = [3, 2, 2, 3];
let val = 3;

var remvVal = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[k] = nums[i];
            k++;
        }
    }
    nums.length = k; // Resize the array to include only the non-target elements
}

remvVal(nums, val);
console.log(nums); // Output: [2, 2]
*/
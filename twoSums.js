let nums = [1,4,5,7,9,14,34];

let target = 23;
let sol = [];

for(let i = 0;i<nums.length;i++){
    for(let j = i+1;j<nums.length;j++){
        if(nums[i]+nums[j]===target){
            sol=[nums[i],nums[j]];

        }

    }

    
}
console.log(sol);
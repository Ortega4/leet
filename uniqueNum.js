let nums =[1,1,1,2,3,3,3,3,4,4,5,6,7,8];

let k = 1;

for(let i=1;i<nums.length;i++){
    if(!(nums[i]===nums[i-1])){
        nums[k]=nums[i];
        k++;


    }

}
for(let i=k;i<nums.length;i++){
    nums[i]="_";
}
console.log("unique elements: "+k);
console.log(nums); 

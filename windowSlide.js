let arr = [1,2,2,3,4,6,7,3,7,8,9,14,5];

let windowSize = 2;
let indexOfMax;
let windowSum = 0;
let maxWindowSum=0;

for(let i =0;i<windowSize;i++){
    windowSum +=arr[i];


}
maxWindowSum=windowSum;
for(let i=windowSize;i<arr.length;i++){
    windowSum+=arr[i] - arr[i-windowSize];

    if(maxWindowSum<windowSum){
        maxWindowSum=windowSum;
        indexOfMax = i-windowSize+1;


}
}
console.log("max sum of window starts at index: "+indexOfMax);
console.log("max sum window adds up to: "+maxWindowSum);
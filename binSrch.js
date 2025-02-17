//binary search algorithm leet code practice.

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let left =0;
let right = arr.length;
// we are looking for value;
let target = 4;

while(left<=right){

    let middle = Math.floor(left+ (right-left)/2);
    console.log("current middle: "+ middle);

    if(target===arr[middle]){
        console.log("target found at index: "+ middle);
        break;
    }
    else if(target>arr[middle]){
        left = middle+1;
        console.log("left side trim, new left: "+ left);

    }
    else if(target<arr[middle]){
        right = middle-1;
        console.log("right side trim, new right: "+ right);
    }
}

let nums1 = [0];
let m =1;
let nums2 = [1];
let n =1;

var nums1withNums2combo = function(nums1,m,nums2,n) {
    let i = m-1;
    let j = n-1;
    let k = m+n-1;

    while(j>=0){

        if(nums1[i]>nums2[j]){
            nums1[k]=nums1[i];
            i--;
        }
        else{
            nums1[k]=nums2[j];
            j--;
        }
        k--;
    }
    console.log(nums1);
}
nums1withNums2combo(nums1,m,nums2,n);
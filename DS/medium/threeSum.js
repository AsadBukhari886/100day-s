var threeSum = function (arr) {
    // let triple=[];
    // let length=nums.length;
    // for(let i=0;i<=length;i++){
    //     for(let j=i+1;j<=length;j++){
    //         for (let k=j+1;k<=length;k++){
    //             if((nums[i]+nums[j]+nums[k])===0){
    //                triple.push(nums[i]+nums[j]+nums[k]);

    //             }
    //         }
    //     }
    // }
    // return triple;
    const result = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 2; i++) {
        if (i === 0 || (i > 0 && arr[i] !== arr[i - 1])) {
            let lo = i + 1;
            let hi = arr.length - 1;
            let sum = -arr[i];
            while (lo < hi) {
                if (arr[lo] + arr[hi] === sum) {
                    result.push([arr[i], arr[lo], arr[hi]]);
                    while (lo < hi && arr[lo] === arr[lo + 1]) lo++;
                    while (lo < hi && arr[hi] === arr[hi - 1]) hi--;
                    lo++;
                    hi--;
                } else if (arr[lo] + arr[hi] < sum) {
                    lo++;
                } else {
                    hi--;
                }
            }
        }
    }
    return result;
};
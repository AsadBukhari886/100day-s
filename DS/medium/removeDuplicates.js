var removeDuplicates = function (nums) {
    // const fset=new Set(nums)
    // const uniqueArr=Array.from(fset);
    // console.log(uniqueArr)
    // return uniqueArr;
    // const fset = new Set(nums);
    //   const uniqueArr = Array.from(fset);
    //   return uniqueArr.map(Number);
    if (nums.length === 0) {
        return 0;
    }

    let k = 1; // index of the last unique element
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k++] = nums[i];
        }
    }

    return k;
};
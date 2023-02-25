var findMedianSortedArrays = function (nums1, nums2) {
    const sortedArray = nums1.concat(nums2).sort();
    console.log("sorted array", sortedArray);
    const length = sortedArray.length;
    const half = length / 2;
    console.log("", length, "half", half)

    if (length % 2 == 0) {
        console.log('length is even: Medain is :', (sortedArray[half - 1] + sortedArray[half]) / 2)
    } else {
        let index = Math.ceil(half - 1)
        console.log("length is odd :Median is = ", sortedArray[index])
    }

    // Math.ceil()
};

// (findMedianSortedArrays([1, 3, 4, 5], [2, 6]))

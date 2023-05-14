var productExceptSelf = function(nums) {
    let answer = [];
    let multiple = 1;
    
    // Calculate the product of all non-zero elements in the array
    let nonZeroProduct = nums.filter(val => val !== 0).reduce((acc, val) => acc * val, 1);
    
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        // If the current element is zero, push the non-zero product to the answer array
        answer.push(nums.slice(0, i).concat(nums.slice(i + 1)).reduce((acc, val) => acc * val, 1));
      } else if (nums.indexOf(0) !== -1) {
        // If there is at least one zero element in the array, push 0 to the answer array
        answer.push(0);
      } else {
        // Otherwise, calculate the product of all elements except the current element
        answer.push(nonZeroProduct / nums[i]);
      }
    }
    
    return answer;
  };
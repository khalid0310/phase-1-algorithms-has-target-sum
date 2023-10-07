function hasTargetSum(nums, target) {
  const numMap = {};

  for (const num of nums) {
      const diff = target - num;
      if (numMap[diff]) {
          return true;
      }
      numMap[num] = true;
  }

  return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));   // true
console.log(hasTargetSum([1, 2, 5], 4));            // false

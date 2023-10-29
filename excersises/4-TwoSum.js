// leetcode solution

export function twoSum_F(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let y = 0; y < nums.length; y++) {
      console.log(nums[(i, y)]);
      if (nums[i] + nums[y] === target && i != y) return [i, y];
    }
  }
}

export function twoSum_RE(nums, target) {
  const arrObject = nums.reduce((prev, curr, i) => {
    prev[curr] = i;
    return prev;
  }, {});
  
  return arrObject;
}

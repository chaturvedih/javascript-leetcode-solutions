const rotate = (nums, k) => {
  k = k % nums.length

  function reverse(nums, l, r){

    while(l<r){
      const tmp = nums[l]
      nums[l] = nums[r]
      nums[r] = tmp
      l++
      r--
    }

    return nums
  }

  nums = reverse(nums, 0, nums.length - 1)
  nums = reverse(nums, 0, k - 1)
  nums = reverse(nums, k, nums.length - 1)
  return nums
}

console.log(rotate([2], 3))
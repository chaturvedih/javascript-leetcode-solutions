const searchRange = (nums, target) => {

  const find = (T,N, left, right = nums.length) => {
    while(left <= right){
      let mid = left + right >> 1
      if(N[mid] < T){
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  
    return left
  }

  let idx = find(target, nums, 0)
  if(nums[idx] !== target) return [-1, -1]
  return [idx, find(target+1, nums, nums.length-1) - 1]
}

// const nums = [5,7,7,8,8,8,8,8,8,10]
const nums = [8]
const target = 8
console.log(searchRange(nums, target))
// console.log(find(target+9, nums, nums.length - 1, 0))
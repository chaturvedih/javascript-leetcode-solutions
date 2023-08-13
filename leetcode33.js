// Using recurssion
// const search = (nums, target) => {
//     const find = (target, nums, start, end) => {
//         const mid = start + end >> 1
//         console.log('->>>', mid, start, end)
//         if(nums[mid] === target) return mid

//         if(start >= end) return -1

//         const left = find(target, nums, start, mid - 1)
//         const right = find(target, nums, mid + 1, end)
//         return Math.max(left, right)
//     }

//     return find(target, nums, 0, nums.length - 1)
// }

const search = (nums, target) => {
    const n = nums.length;
    let left = 0;
    let right = n - 1;
  
    // Find the pivot index (index of the smallest element)
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    const pivot = left;
    // Perform binary search in the appropriate half
    left = 0;
    right = n - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const idx = (mid + pivot) % n // Adjust for rotation
      console.log('adjusting mid', mid, idx, pivot)
      const midValue = nums[idx];
      if (midValue === target) {
        return idx; 
      } else if (midValue < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
}

const nums = [4,5,6,7,0,1,2]
// const nums = [1,3]

const target = 0
console.log(search(nums, target))
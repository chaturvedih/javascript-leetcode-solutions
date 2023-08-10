const findKthLargest = function(nums, k) {
  k = nums.length - k

  function quickSelect(nums, lo, hi, k){
    let pivotIdx = lo - 1
    const pivot = nums[hi]
    
    for(let i=lo; i<hi; i++){
      if(nums[i]<pivot){
        ++pivotIdx
        const tmp = nums[i]
        nums[i] = nums[pivotIdx]
        nums[pivotIdx] = tmp
      }
    }
    
    ++pivotIdx
    nums[hi] = nums[pivotIdx]
    nums[pivotIdx] = pivot
    
    if(k === pivotIdx){
      return nums[pivotIdx]
    } else if(k < pivotIdx){
      return quickSelect(nums, lo, pivotIdx -1, k)
    } else{
      return quickSelect(nums, pivotIdx + 1, hi, k)
    }
  }

  return quickSelect(nums, 0, nums.length-1, k)
};

const nums  = [3,2,3,1,2,4,5,5,6]

console.log(findKthLargest(nums, 4))
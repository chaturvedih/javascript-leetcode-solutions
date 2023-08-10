var moveZeroes = function(nums) {

  let i = 0
  let j = 1
  while(j<nums.length){
    if(nums[i] !==0){
      i++
      j++
    } else{
      if(nums[j] !== 0){
        const tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
        i++
      }
      j++
    }
  }

  return  nums
};

console.log(moveZeroes([0,1,0,3,12]))
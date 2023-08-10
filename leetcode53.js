const maxSubArray = (nums) => {
  let max = nums[0]
  let curr = 0
  for(let i=1; i<nums.length; i++){
    if(curr < 0){
      curr = 0
    }
    
    curr += nums[i]
    if(max<curr){
      max = curr
    }
  }
  return max
}

console.log(maxSubArray([-2,-3,-3,-4,-1,-2,-1,-5,-4]))
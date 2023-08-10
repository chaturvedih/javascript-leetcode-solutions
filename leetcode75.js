const sortColors = (nums)=>{
  const hashMap = {}
  let idx = 0

  nums.forEach(element => {
      if(!hashMap[element]){
      hashMap[element] = 1
      } else{
      hashMap[element]++
      }
  });

  Object.keys(hashMap).forEach((key) => {
      for(let i=0; i<hashMap[key]; i++){
          nums[idx] = parseInt(key)
          idx++
      }
  })
  
  return nums

}

console.log(sortColors([2,0,2,1,1,0]))
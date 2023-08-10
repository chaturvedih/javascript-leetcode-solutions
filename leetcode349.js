function intersection(num1, num2){
  const hashMap = {}
  const result = []
  num1.forEach(element => {
    if(hashMap[element]){
      hashMap[element]++
    } else{
      hashMap[element] = 1
    }
  });

  for(let i=0; i<num2.length; i++){
    if(hashMap[num2[i]]){
      result.push(num2[i])
      hashMap[num2[i]]--
    }
  }

  return result
}

console.log(intersection([4,9,5], [9,4,9,8,4]))
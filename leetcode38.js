const countAndSay = (n) => {

  function sayCount(n){
    if(n===1) return '1'

    const str = sayCount(n-1)

    let i = 0
    let j = 0
    let s = str[i]
    let newStr = ''
    while(i<str.length){
      if(s === str[i]){
        j++
      } else{
        newStr += `${j}${s}`
        j=1
        s = str[i]
      }
      i++
    }
    newStr += `${j}${s}`
    return newStr
  }
  
  return sayCount(n)
}

const n = 6
console.log(countAndSay(n))
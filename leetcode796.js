const rotateString = (s, goal) => {
  let temp = s
  for(let i=0; i<s.length; i++){
    if(temp === goal){
      return true
    }

    temp = temp[s.length-1] + temp.substring(0,s.length-1)
  }

  return false
}

const s = 'abcde'
const goal = 'abade'

console.log(rotateString(s, goal))
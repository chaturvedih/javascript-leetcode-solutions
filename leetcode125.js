const isPalindrome = (str) => {
  let startPointer = 0
  let endPointer = str.length - 1
  while(startPointer<endPointer){
  if(isValidChar(str[startPointer])){
    if(isValidChar(str[endPointer])){
      if(str[startPointer].toLowerCase() === str[endPointer].toLowerCase()){
        startPointer++
        endPointer--
      } else{
        return false
      }
    } else{
      endPointer--
    }
    } else{
      startPointer++
    }
  }

  return true
}

function isValidChar(str){
  return (str.charCodeAt()>= 65 && str.charCodeAt()<=90) || (str.charCodeAt()>=97 && str.charCodeAt()<=122)
}
const str = 'A man, a plan, a canal: Panama'
let out = str.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, '');
console.log(out)
// console.log(isPalindrome(str))
const mysqrt = (x) => {
    if(x<2) return x
    
    let left = 0
    let right = x
    
    while(left <= right){
        let mid = (left + right) >> 1
        if(mid*mid <= x  && (mid + 1)*(mid + 1)> x){
            return Math.floor(mid)
        } else if(mid*mid>x){
            right = mid
        } else {
            left = mid
        }
    }
}

console.log(mysqrt(2))
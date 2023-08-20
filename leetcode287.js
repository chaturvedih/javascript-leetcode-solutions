const arr = [7,1,3,4,1,5,6,2]

const findDuplicate = (nums) => {
    let slow = 0
    let fast = 0

    while(true){
        slow = nums[slow]
        fast = nums[nums[fast]]
        if(slow === fast) break
    }
    
    slow = 0
    while(true){
        if(nums[slow] === nums[fast]) return nums[fast]
        slow = nums[slow]
        fast = nums[fast]
    }
}

console.log(findDuplicate(arr))
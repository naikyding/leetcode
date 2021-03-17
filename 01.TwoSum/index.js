var twoSum = function(nums, target) {    
  let ary = []
  let finalAry = []
  
  nums.forEach((item, index)=>{
    let copyAry = [...nums]
    copyAry.splice(index, 1)
      copyAry.forEach((otherVal)=>{ 
        console.log(otherVal + item == target)
          if(otherVal + item == target) {
            ary.push(otherVal)
            return false
          }
      })
      
  })
  
  if(ary.length > 1) {
      ary.forEach(val=>{
          finalAry.push(nums.indexOf(val))
      })

      return finalAry.sort()
  }  
};

console.log(twoSum([2,7,11,15], 9))
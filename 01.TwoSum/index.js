/**
 * nums 陣列，其中兩數相加為 target
 * @date 2021-03-18
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]} 相加為 target 的兩數索引
 */
const twoSum = function (nums, target) {
  let ary = []
  let finalAry = []

  nums.forEach((val, index) => {
    let copyAry = [...nums]
    copyAry.splice(index, 1)
    copyAry.forEach((otherVal) => {
      if (otherVal + val == target) {
        if (ary.length == 2) return false
        ary.push(otherVal, val)
        return false
      }
    })
  })
  ary.forEach((val) => {
    finalAry.push(nums.indexOf(val))
  })
  return finalAry.sort()
}

console.log(twoSum([2, 7, 11, 15], 9))

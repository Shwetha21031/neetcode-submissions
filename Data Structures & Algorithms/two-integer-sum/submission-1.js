class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()

        for(let i=0; i<nums.length; i++){
            let req=target-nums[i]
            if(map.has(req)){
                return [map.get(req),i]
            }else{
                map.set(nums[i],i)
            }
        }
        return [-1,-1]
    }
}

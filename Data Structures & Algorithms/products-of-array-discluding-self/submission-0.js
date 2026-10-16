class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let ans = [];
        let prefix = 1;

        for (let i = 0; i < nums.length; i++) {
            ans[i] = prefix;
            prefix *= nums[i];
        }

        let suffix = 1;

        for (let j = nums.length - 1; j >= 0; j--) {
            ans[j] *= suffix;
            suffix *= nums[j];
        }

        return ans;
    }
}

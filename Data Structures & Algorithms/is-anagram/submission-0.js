class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map()
        for(let i of s){
            map.set(i,(map.get(i)||0)+1)
        }

        for(let i of t){
            map.set(i,map.get(i)-1)
            if(map.get(i)<1){
                map.delete(i)
            }
        }

        return map.size===0
    }
}

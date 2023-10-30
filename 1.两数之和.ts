/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  if (nums.length < 1) return [];
  let map: Map<number, any> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // 取差值
    const diff = target - num;
    if (map.has(diff)) {
      // 若差值存在，则直接返回
      // map.get取出的会是符合条件的第一位数值索引，循环走到第二位符合条件时，索引为i
      return [map.get(diff), i];
    }
    // 循环至少会执行一次，第一次设置前map值为Map {}
    map.set(num, i);
  }
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 *
 * https://leetcode.cn/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Medium (53.45%)
 * Likes:    1870
 * Dislikes: 0
 * Total Accepted:    473.8K
 * Total Submissions: 887.6K
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 *
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,3,7,2,5,8,4,6,0,1]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  let result = 0;
  let currentResult = 0;
  const numArray = [...new Set([...nums])].sort((a, b) => a - b);
  for (let i = 0; i < numArray.length - 1; i++) {
    if (
      numArray[i + 1] - numArray[i] === 1 || // 3 - 2
      numArray[i] - numArray[i + 1] === 1 // (-1) - (-2)
    )
      currentResult++;
    else {
      if (currentResult >= result) result = currentResult;
      currentResult = 0;
    }
  }
  if (currentResult >= result) result = currentResult;
  return result + 1;
};

// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
// console.log(
//   longestConsecutive([
//     7, -9, 3, -6, 3, 5, 3, 6, -2, -5, 8, 6, -4, -6, -4, -4, 5, -9, 2, 7, 0, 0,
//   ])
// );

// @lc code=end

/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode.cn/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (74.18%)
 * Likes:    850
 * Dislikes: 0
 * Total Accepted:    498.4K
 * Total Submissions: 671.7K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 * 解释：[4,9] 也是可通过的
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 根据数组大小交换操作的数组
  if (nums1.length < nums2.length) [nums1, nums2] = [nums2, nums1];
  const nums1Set = new Set(nums1);
  const resSet = new Set();
  // for(const n of nums2) nums1Set.has(n) && resSet.add(n);
  // 循环 比 迭代器快
  for (let i = nums2.length - 1; i >= 0; i--)
    nums1Set.has(nums2[i]) && resSet.add(nums2[i]);
  return Array.from(resSet);
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const arr = nums1.concat(nums2).sort((a, b) => a - b);
  return arr.length % 2 === 0
    ? (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
    : arr[(arr.length - 1) / 2];
}

// @lc code=end

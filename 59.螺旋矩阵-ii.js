/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode.cn/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (71.86%)
 * Likes:    1201
 * Dislikes: 0
 * Total Accepted:    365.5K
 * Total Submissions: 509.2K
 * Testcase Example:  '3'
 *
 * 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：[[1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */

var generateMatrix = function (n) {
  let currentNum = 1;
  let l = 0;
  let r = n - 1;
  let t = 0;
  let b = n - 1;
  const target = n * n;
  const martix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  while (currentNum <= target) {
    for (let i = l; i <= r; i++) martix[t][i] = currentNum++; // left to right
    t++;
    for (let i = t; i <= b; i++) martix[i][r] = currentNum++; // top to bottom
    r--;
    for (let i = r; i >= l; i--) martix[b][i] = currentNum++; // right to left
    b--;
    for (let i = b; i >= t; i--) martix[i][l] = currentNum++; // bottom to top
    l++;
  }
  return martix;
};

/* 作者：Krahets
链接：https://leetcode.cn/problems/spiral-matrix-ii/solutions/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */
// @lc code=end

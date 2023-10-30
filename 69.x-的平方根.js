/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode.cn/problems/sqrtx/description/
 *
 * algorithms
 * Easy (38.42%)
 * Likes:    1463
 * Dislikes: 0
 * Total Accepted:    806.9K
 * Total Submissions: 2.1M
 * Testcase Example:  '4'
 *
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 *
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 *
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：x = 4
 * 输出：2
 *
 *
 * 示例 2：
 *
 *
 * 输入：x = 8
 * 输出：2
 * 解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= x <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // 整数x的平方根一定是在1到x的范围内
  let left = 1,
    right = x;
  while (left <= right) {
    // 中间值  下面这样写是防止溢出
    let mid = left + ((right - left) >> 1);
    // 判断mid的平方是否小于或等于x，如果mid的平方小于x
    if (mid <= x / mid) {
      // 判断(mid+1)的平方是否大于x，如果(mid+1)的平方大于x，那么mid就是x的平方根
      if (mid + 1 > x / (mid + 1)) {
        return mid;
      }
      // 如果mid的平方小于x并且(mid+1)的平方小于x，那么x的平方根比mid大，接下来搜索从mid+1到x的范围
      left = mid + 1;
    } else {
      // 如果mid的平方大于x，则x的平方根小于mid，接下来搜索1到mid-1的范围
      right = mid - 1;
    }
  }
  // 如果输入参数是0，left等于1而right等于0，就直接返回0
  return 0;
};

/* 

整数x的平方根一定小于或等于x
除0之外的所有整数的平方根都大于或等于1
整数x的平方根一定是在1到x的范围内，取这个范围内的中间数字mid，并判断mid的平方是否小于或等于x，如果mid的平方小于x
那么接着判断(mid+1)的平方是否大于x，如果(mid+1)的平方大于x，那么mid就是x的平方根
如果mid的平方小于x并且(mid+1)的平方小于x，那么x的平方根比mid大，接下来搜索从mid+1到x的范围
如果mid的平方大于x，则x的平方根小于mid，接下来搜索1到mid-1的范围
然后在相应的范围内重复这个过程，总是取出位于范围中间的mid

作者：angela
链接：https://leetcode.cn/problems/sqrtx/solutions/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

*/

// @lc code=end

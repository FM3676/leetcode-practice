/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode.cn/problems/4sum/description/
 *
 * algorithms
 * Medium (36.71%)
 * Likes:    1788
 * Dislikes: 0
 * Total Accepted:    524.2K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a],
 * nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 * 
 * 
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * 
 * 
 * 你可以按 任意顺序 返回答案 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [2,2,2,2,2], target = 8
 * 输出：[[2,2,2,2]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let ans = [];
    for (let a = 0; a < n - 3; a++) { // 枚举第一个数
        const x = nums[a]; // 使用 long long 避免溢出
        if (a > 0 && x === nums[a - 1]) continue; // 跳过重复数字
        if (x + nums[a + 1] + nums[a + 2] + nums[a + 3] > target) break; // 优化一
        if (x + nums[n - 3] + nums[n - 2] + nums[n - 1] < target) continue; // 优化二
        for (let b = a + 1; b < n - 2; b++) { // 枚举第二个数
            const y = nums[b];
            if (b > a + 1 && y === nums[b - 1]) continue; // 跳过重复数字
            if (x + y + nums[b + 1] + nums[b + 2] > target) break; // 优化一
            if (x + y + nums[n - 2] + nums[n - 1] < target) continue; // 优化二
            let c = b + 1, d = n - 1;
            while (c < d) { // 双指针枚举第三个数和第四个数
                const s = x + y + nums[c] + nums[d]; // 四数之和
                if (s > target) d--;
                else if (s < target) c++;
                else { // s == target
                    ans.push([x, y, nums[c], nums[d]]);
                    for (c++; c < d && nums[c] === nums[c - 1]; c++); // 跳过重复数字
                    for (d--; d > c && nums[d] === nums[d + 1]; d--); // 跳过重复数字
                }
            }
        }
    }
    return ans;
};

/* 作者：灵茶山艾府
链接：https://leetcode.cn/problems/4sum/solutions/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */
// @lc code=end


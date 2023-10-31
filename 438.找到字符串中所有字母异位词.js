/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (54.23%)
 * Likes:    1317
 * Dislikes: 0
 * Total Accepted:    338.1K
 * Total Submissions: 623.6K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 *
 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "abab", p = "ab"
 * 输出: [0,1,2]
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= s.length, p.length <= 3 * 10^4
 * s 和 p 仅包含小写字母
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let left = 0;
  let right = 0;
  let valid = 0;
  const res = [];
  const need = new Map();
  const window = new Map();
  for (const c of p) need.set(c, need.has(c) ? need.get(c) + 1 : 1);
  while (right < s.length) {
    const c = s[right];
    right++;
    // 进行窗口内数据的一系列更新
    if (need.has(c)) {
      if (window.has(c)) window.set(c, window.get(c) + 1);
      else window.set(c, 1);

      if (window.get(c) === need.get(c)) valid++;
    }

    // 判断左侧窗口是否要收缩
    while (right - left >= p.length) {
      // 当窗口符合条件时，将起始索引加入 res
      if (valid === need.size) res.push(left);

      const d = s[left];
      left++;
      // 进行窗口内数据的一系列更新
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--;

        window.set(d, window.get(d) - 1);
      }
    }
  }

  return res;
};
// @lc code=end

/* 
作者：labuladong
链接：https://leetcode.cn/problems/find-all-anagrams-in-a-string/solutions/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

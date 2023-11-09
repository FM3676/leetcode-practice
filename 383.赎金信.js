/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 *
 * https://leetcode.cn/problems/ransom-note/description/
 *
 * algorithms
 * Easy (61.57%)
 * Likes:    809
 * Dislikes: 0
 * Total Accepted:    392.4K
 * Total Submissions: 636K
 * Testcase Example:  '"a"\n"b"'
 *
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 *
 * 如果可以，返回 true ；否则返回 false 。
 *
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：ransomNote = "a", magazine = "b"
 * 输出：false
 *
 *
 * 示例 2：
 *
 *
 * 输入：ransomNote = "aa", magazine = "ab"
 * 输出：false
 *
 *
 * 示例 3：
 *
 *
 * 输入：ransomNote = "aa", magazine = "aab"
 * 输出：true
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= ransomNote.length, magazine.length <= 10^5
 * ransomNote 和 magazine 由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const strArr = new Array(26).fill(0);
  const base = "a".charCodeAt();

  // 记录 magazine里各个字符出现次数
  for (const s of magazine) strArr[s.charCodeAt() - base]++;

  for (const s of ransomNote) {
    // 对应的字符个数做--操作
    const index = s.charCodeAt() - base;
    if (!strArr[index]) return false; // 如果没记录过直接返回false
    strArr[index]--;
  }
  return true;
};
// @lc code=end

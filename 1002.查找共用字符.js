/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 *
 * https://leetcode.cn/problems/find-common-characters/description/
 *
 * algorithms
 * Easy (70.32%)
 * Likes:    354
 * Dislikes: 0
 * Total Accepted:    90K
 * Total Submissions: 128.1K
 * Testcase Example:  '["bella","label","roller"]'
 *
 * 给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序
 * 返回答案。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：words = ["bella","label","roller"]
 * 输出：["e","l","l"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：words = ["cool","lock","cook"]
 * 输出：["c","o"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 100
 * words[i] 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
 let min_count = new Map();
 // 统计字符串中字符出现的最小频率,以第一个字符串初始化
 for (let str of words[0]) {
   min_count.set(str, (min_count.get(str) || 0) + 1);
 }
 // 从第二个单词开始统计字符出现次数
 for (let i = 1; i < words.length; i++) {
   let char_count = new Map();
   for (let str of words[i]) {
     // 遍历字母
     char_count.set(str, (char_count.get(str) || 0) + 1);
   }
   // 比较出最小的字符次数
   for (let value of min_count) {
     // 注意这里遍历min_count!而不是单词
     min_count.set(
       value[0],
       Math.min(min_count.get(value[0]) || 0, char_count.get(value[0]) || 0)
     );
   }
 }
 // 遍历map
 let res = [];
 min_count.forEach((value, key) => {
   if (value) {
     for (let i = 0; i < value; i++) {
       res.push(key);
     }
   }
 });
 return res;
};
/* https://github.com/youngyangyang04/leetcode-master/blob/master/problems/1002.%E6%9F%A5%E6%89%BE%E5%B8%B8%E7%94%A8%E5%AD%97%E7%AC%A6.md */
// @lc code=end


/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode.cn/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (42.85%)
 * Likes:    10143
 * Dislikes: 0
 * Total Accepted:    1.9M
 * Total Submissions: 4.4M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 *
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 *
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 *
 *
 * 示例 2：
 *
 *
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 *
 *
 * 示例 3：
 *
 *
 * 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出：[8,9,9,9,0,0,0,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 每个链表中的节点数在范围 [1, 100] 内
 * 0
 * 题目数据保证列表表示的数字不含前导零
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// l1 和 l2 为当前遍历的节点，carry 为进位
var addTwoNumbers = function (l1, l2, carry = 0) {
  if (l1 === null && l2 === null)
    // 递归边界：l1 和 l2 都是空节点
    return carry ? new ListNode(carry) : null; // 如果进位了，就额外创建一个节点
  if (l1 === null)
    // 如果 l1 是空的，那么此时 l2 一定不是空节点
    [l1, l2] = [l2, l1]; // 交换 l1 与 l2，保证 l1 非空，从而简化代码
  carry += l1.val + (l2 ? l2.val : 0); // 节点值和进位加在一起
  // 假设 carry = 9 + 7 = 16, 当前节点l1.val应该保存 6，进位1则到下一个Node进行相加
  l1.val = carry % 10; // 每个节点保存一个数位
  l1.next = addTwoNumbers(l1.next, l2 ? l2.next : null, Math.floor(carry / 10)); // 进位
  return l1;
};
// @lc code=end

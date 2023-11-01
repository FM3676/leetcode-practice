/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode.cn/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (53.64%)
 * Likes:    1808
 * Dislikes: 0
 * Total Accepted:    651.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,2,1]'
 *
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,2,1]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1,2]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点数目在范围[1, 10^5] 内
 * 0 <= Node.val <= 9
 *
 *
 *
 *
 * 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head == null || head.next == null) {
    return true;
  }
  let fast = head;
  let slow = head;
  let prev;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null; // 断成两个链表
  // 翻转后半段
  let head2 = null;
  while (slow) {
    const tmp = slow.next;
    slow.next = head2;
    head2 = slow;
    slow = tmp;
  }
  // 比对
  while (head && head2) {
    if (head.val != head2.val) {
      return false;
    }
    head = head.next;
    head2 = head2.next;
  }
  return true;
};


/* 
快慢指针，起初都指向表头，快指针一次走两步，慢指针一次走一步，遍历结束时：

要么，slow 正好指向中间两个结点的后一个。
要么，slow 正好指向中间结点。
用 prev 保存 slow 的前一个结点，通过prev.next = null断成两个链表。

将后半段链表翻转，和前半段从头比对。空间复杂度降为O(1)。

作者：笨猪爆破组
链接：https://leetcode.cn/problems/palindrome-linked-list/solutions/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

*/

// @lc code=end

/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 *
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (46.42%)
 * Likes:    2719
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.7M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1], n = 1
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中结点的数目为 sz
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 *
 *
 *
 *
 * 进阶：你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let slow = head,
    fast = head;
  while (n--) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
};

/* 

采取双重遍历肯定是可以解决问题的，但题目要求我们一次遍历解决问题，那我们的思路得发散一下。

我们可以设想假设设定了双指针 p 和 q 的话，当 q 指向末尾的 NULL，p 与 q 之间相隔的元素个数为 n 时，那么删除掉 p 的下一个指针就完成了要求。

设置虚拟节点 dummyHead 指向 head
设定双指针 p 和 q，初始都指向虚拟节点 dummyHead
移动 q，直到 p 与 q 之间相隔的元素个数为 n
同时移动 p 与 q，直到 q 指向的为 NULL
将 p 的下一个节点指向下下个节点

  const dummyHead = new ListNode(0, head);
  let p = dummyHead;
  let q = dummyHead;
  for (let i = 0; i < n + 1; i++) q = q.next;
  while (q) {
    p = p.next;
    q = q.next;
  }
  p.next = p.next.next;
  return dummyHead.next;

作者：程序员吴师兄
链接：https://leetcode.cn/problems/remove-nth-node-from-end-of-list/solutions/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

*/

// @lc code=end

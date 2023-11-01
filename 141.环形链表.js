/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 *
 * https://leetcode.cn/problems/linked-list-cycle/description/
 *
 * algorithms
 * Easy (51.90%)
 * Likes:    2038
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2.1M
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给你一个链表的头节点 head ，判断链表中是否有环。
 *
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos
 * 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
 *
 * 如果链表中存在环 ，则返回 true 。 否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：head = [1,2], pos = 0
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 *
 *
 * 示例 3：
 *
 *
 *
 *
 * 输入：head = [1], pos = -1
 * 输出：false
 * 解释：链表中没有环。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目范围是 [0, 10^4]
 * -10^5 <= Node.val <= 10^5
 * pos 为 -1 或者链表中的一个 有效索引 。
 *
 *
 *
 *
 * 进阶：你能用 O(1)（即，常量）内存解决此问题吗？
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  const array = [];
  while (head.next) {
    if (!array.includes(head)) array.push(head);
    else return true;
    head = head.next;
  }
  return false;
};

/* 
每当慢指针slow前进一步，快指针fast就前进两步。
如果fast最终遇到空指针，说明链表中没有环；
如果fast最终和slow相遇，那肯定是fast超过了slow n圈，说明链表中含有环。

var hasCycle = function(head) {
  // 快慢指针初始化指向 head
  let slow = head;
  let fast = head;
  // 快指针走到末尾时停止
  while (fast && fast.next) {
    // 慢指针走一步，快指针走两步
    slow = slow.next;
    fast = fast.next.next;
    // 快慢指针相遇，说明含有环
    if (slow == fast) {
      return true;
    }
  }
  // 不包含环
  return false;
};

作者：angela
链接：https://leetcode.cn/problems/linked-list-cycle/solutions/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

*/

/* 
JSON.stringify(head) 秒杀法😃 除非不报错，报错就是有环！！JSON.stringify()方法在对象出现循环引用的时候会报错,当 JSON.stringify() 尝试将包含循环引用的对象转换为 JSON 字符串时，它会陷入无限循环，导致堆栈溢出或无法完成操作
var hasCycle = function (head) {
    try {
        JSON.stringify(head)
    } catch{
        return true
    }
    return false
};

作者：晨风
链接：https://leetcode.cn/problems/linked-list-cycle/solutions/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

*/

// @lc code=end

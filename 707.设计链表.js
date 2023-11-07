/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 *
 * https://leetcode.cn/problems/design-linked-list/description/
 *
 * algorithms
 * Medium (34.45%)
 * Likes:    961
 * Dislikes: 0
 * Total Accepted:    266.2K
 * Total Submissions: 773.3K
 * Testcase Example:  '["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]\n' +
  '[[],[1],[3],[1,2],[1],[1],[1]]'
 *
 * 你可以选择使用单链表或者双链表，设计并实现自己的链表。
 * 
 * 单链表中的节点应该具备两个属性：val 和 next 。val 是当前节点的值，next 是指向下一个节点的指针/引用。
 * 
 * 如果是双向链表，则还需要属性 prev 以指示链表中的上一个节点。假设链表中的所有节点下标从 0 开始。
 * 
 * 实现 MyLinkedList 类：
 * 
 * 
 * MyLinkedList() 初始化 MyLinkedList 对象。
 * int get(int index) 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1 。
 * void addAtHead(int val) 将一个值为 val
 * 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
 * void addAtTail(int val) 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
 * void addAtIndex(int index, int val) 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果
 * index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
 * void deleteAtIndex(int index) 如果下标有效，则删除链表中下标为 index 的节点。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get",
 * "deleteAtIndex", "get"]
 * [[], [1], [3], [1, 2], [1], [1], [1]]
 * 输出
 * [null, null, null, null, 2, null, 3]
 * 
 * 解释
 * MyLinkedList myLinkedList = new MyLinkedList();
 * myLinkedList.addAtHead(1);
 * myLinkedList.addAtTail(3);
 * myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
 * myLinkedList.get(1);              // 返回 2
 * myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
 * myLinkedList.get(1);              // 返回 3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= index, val <= 1000
 * 请不要使用内置的 LinkedList 库。
 * 调用 get、addAtHead、addAtTail、addAtIndex 和 deleteAtIndex 的次数不超过 2000 。
 * 
 * 
 */

// @lc code=start
class LinkNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this._size = 0;
    this._tail = null;
    this._head = null;
  }

  /**
   * @param {number} index
   * @returns {LinkNode}
   */
  getNodeAtIndex(index) {
    if (index < 0 || index >= this._size) return null;
    let current = new LinkNode(0, this._head);
    while (index-- >= 0) current = current.next;
    return current;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index < 0 || index >= this._size) return -1;
    return this.getNodeAtIndex(index).val;
  }
  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    const newHead = new LinkNode(val, this._head);
    this._size++;
    this._head = newHead;
    if (!this._tail) this._tail = newHead;
  }
  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    const newTail = new LinkNode(val, null);
    this._size++;
    if (this._tail) {
      this._tail.next = newTail;
      this._tail = newTail;
      return;
    }
    this._tail = newTail;
    this._head = newTail;
  }
  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index > this._size) return;
    if (index <= 0) return this.addAtHead(val);
    if (index === this._size) return this.addAtTail(val);
    // 获取目标节点的上一个的节点
    const node = this.getNodeAtIndex(index - 1);
    node.next = new LinkNode(val, node.next);
    this._size++;
  }
  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (index < 0 || index >= this._size) return;
    if (index === 0) {
      this._head = this._head.next;
      // 如果删除的这个节点同时是尾节点，要处理尾节点
      if (index === this._size - 1) this._tail = this._head;
      this._size--;
      return;
    }
    // 获取目标节点的上一个的节点
    const node = this.getNodeAtIndex(index - 1);
    node.next = node.next.next;
    // 处理尾节点
    if (index === this._size - 1) this._tail = node;

    this._size--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

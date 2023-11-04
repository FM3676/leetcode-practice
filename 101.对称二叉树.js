/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode.cn/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (59.26%)
 * Likes:    2583
 * Dislikes: 0
 * Total Accepted:    922.8K
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 *
 *
 *
 *
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true;
  const invert = (root) => {
    if (root === null) return null;
    [root.right, root.left] = [root.left, root.right];
    invert(root.right);
    invert(root.left);
  };
  invert(root.right);
  console.log(JSON.stringify(root.left));
  console.log(JSON.stringify(root.right));
  return (
    JSON.stringify(root.left).toString() ===
    JSON.stringify(root.right).toString()
  );
};

/* 

// 递归判断是否为对称二叉树：
var isSymmetric = function(root) {
    //使用递归遍历左右子树 递归三部曲
    // 1. 确定递归的参数 root.left root.right和返回值true false 
    const compareNode=function(left,right){
        //2. 确定终止条件 空的情况
        if(left===null&&right!==null||left!==null&&right===null){
            return false;
        }else if(left===null&&right===null){
            return true;
        }else if(left.val!==right.val){
            return false;
        }
        //3. 确定单层递归逻辑
        let outSide=compareNode(left.left,right.right);
        let inSide=compareNode(left.right,right.left);
        return outSide&&inSide;
    }
    if(root===null){
        return true;
    }
    return compareNode(root.left,root.right);
};

作者：代码随想录
链接：https://leetcode.cn/problems/symmetric-tree/solutions/862694/dai-ma-sui-xiang-lu-dai-ni-xue-tou-er-ch-hnjo/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

*/


// @lc code=end

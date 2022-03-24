// 94. Binary Tree Inorder Traversal - https://leetcode.com/problems/binary-tree-inorder-traversal/
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 const traverseTree = (root: TreeNode, result: number[]) => {
    if (!root) {
        return;
    }

    traverseTree(root.left, result);
    result.push(root.val);
    traverseTree(root.right, result);
};

function inorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];

    traverseTree(root, result);
    
    return result;
};
// 98. Validate Binary Search Tree - https://leetcode.com/problems/validate-binary-search-tree/
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

const validateNode = (min, root, max): boolean => {
    if (root === null) {
        return true;
    }
    
    if (min >= root.val || root.val >= max) {
        return false;
    }
    
    return validateNode(min, root.left, root.val) && validateNode(root.val, root.right, max);
};

function isValidBST(root: TreeNode | null): boolean {
    return validateNode(-Infinity, root, Infinity);
};
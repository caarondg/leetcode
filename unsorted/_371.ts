// 371. Sum of Two Integers - https://leetcode.com/problems/sum-of-two-integers/submissions/ - Medium
function getSum(a: number, b: number): number {
    let carry;
    
    while (b !== 0) {
        carry = (a & b) << 1; //AND
        a ^= b;               //XOR
        b = carry;
    }
    
    return a;
};
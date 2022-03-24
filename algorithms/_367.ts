function isPerfectSquare(num: number): boolean {
    let left = 0, right = num;
    
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        
        if (mid * mid === num) {
            return true;
        }
        
        if (mid * mid > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return false;
};
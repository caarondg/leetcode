function searchInsert(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    
    while ( left < right ) {
        const mid = Math.floor(left + (right - left) / 2);
        
        if ( target === nums[mid] ) {
            return mid;
        } else if ( target < nums[mid] ) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return target > nums[left] ? left + 1 : left; // if target is larger than current index; insert in next index
};
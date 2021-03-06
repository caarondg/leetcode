function search(nums: number[], target: number): number {
    let mid, 
        left = 0, 
        right = nums.length - 1;
    
    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2);
        
        if ( target === nums[mid] ) {
            return mid; // value found on this index
        } else if ( target < nums[mid] ) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return -1; //not in array
};
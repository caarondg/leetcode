function containsDuplicate(nums: number[]): boolean {
    const numObj = {};
    
    for ( let i = 0; i < nums.length; i++ ) {
        if ( numObj[nums[i]] ) {
            return true;
        } else {
            numObj[nums[i]] = true;
        }
    }
    
    return false;
};
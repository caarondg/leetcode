/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    let pointer = 0;
    
    for ( let i = 0; i < nums.length; i++ ) {
        if ( nums[i] !== 0 ) { // move all non-zero numbers to left side
            // ES6 swap
            [nums[pointer], nums[i]] = [nums[i], nums[pointer]];
            pointer++;
        }
    }
};
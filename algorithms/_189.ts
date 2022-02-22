/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    k %= nums.length;
    
    let reverse = (i, j): void => {
        while(i < j) { 
            let temp = nums[i];
            nums[i++] = nums[j];
            nums[j--] = temp;
        }
    };

                                    // 1 2 3 4 | 5 6 7 
    reverse(0, nums.length - 1);    // 7 6 5 | 4 3 2 1
    reverse(0, k - 1);              // 5 6 7 | 4 3 2 1
    reverse(k, nums.length - 1);    // 5 6 7 | 1 2 3 4
};
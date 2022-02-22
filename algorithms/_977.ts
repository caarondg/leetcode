function sortedSquares(nums: number[]): number[] {
    let squaredArr = [];
    let l = 0;
    let r = nums.length - 1;
    let p = r;
    
    while (l <= r) {
        if ( nums[l] ** 2 > nums[r] ** 2 ) {
            squaredArr[p--] = nums[l++] ** 2;
        } else {
            squaredArr[p--] = nums[r--] ** 2;
        }
    }
    
    return squaredArr;
};
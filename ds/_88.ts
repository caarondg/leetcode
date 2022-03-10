/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let mIndex = m - 1;
    let nIndex = n - 1;
    let mnIndex = m + n - 1;
    
    while (nIndex >= 0) {
        if ( nums1[mIndex] > nums2[nIndex] ) {
            nums1[mnIndex] = nums1[mIndex];
            
            mnIndex--;
            mIndex--;
        } else {
            nums1[mnIndex] = nums2[nIndex];
            
            mnIndex--;
            nIndex--;
        }
    }
};
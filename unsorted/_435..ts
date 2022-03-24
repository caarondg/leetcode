// 435. Non-overlapping Interval - https://leetcode.com/problems/non-overlapping-intervals/submissions/ - medium
function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[1] - b[1]);
    
    let lastNonOverlapping = intervals[0], removed = 0;
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < lastNonOverlapping[1]) { //overlaps
            removed++;
        } else {
            lastNonOverlapping = intervals[i];
        }
    }
    
    return removed;
};
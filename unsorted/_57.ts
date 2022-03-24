// 57. Insert Interval - https://leetcode.com/problems/insert-interval/ - Medium
function insert(intervals: number[][], newInterval: number[]): number[][] {
    const result: number[][] = [];
    let intervalPushed = false;
    
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] < newInterval[0]) {
            result.push(intervals[i]);
        } else if (newInterval[1] < intervals[i][0]) {
            if (!intervalPushed) {
                result.push(newInterval);
                intervalPushed = true;
            }
           
            result.push(intervals[i]);
        } else {
            // Overlaps to existing intervals
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        }
    }
    
    if (!intervalPushed) {
        result.push(newInterval);
    }
    
    return result;
};
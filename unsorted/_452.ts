// 452. Minimum Number of Arrows to Burst Balloons - https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/submissions/ - medium
function findMinArrowShots(points: number[][]): number {
    points.sort((a, b) => a[1] - b[1]);
    
    let lastBalloonShot = points[0], arrowsShot: number = 1; //shoot arrow on first ballooon
    
    for (let i = 1; i < points.length; i++) {
        if (!(points[i][0] <= lastBalloonShot[1])) { //if it does not hit any other balloon shoot another arrow
            arrowsShot++;
            lastBalloonShot = points[i];
        }
    }
    
    return arrowsShot;
};
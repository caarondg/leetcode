/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

 var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let lastGood = 1, Bad = n;
        
        while (lastGood < Bad) {
            const mid = Math.floor(lastGood + (Bad - lastGood) / 2);
            if ( isBadVersion(mid) ) {
                Bad = mid;
            } else {
                lastGood = mid + 1; //the next one after the good version is the bad one
            }
        }
        
        return lastGood;
    };
};
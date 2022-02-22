/* Hashmap alternative */
// function twoSum(numbers: number[], target: number): number[] {
//     let obj = {};
    
//     for ( let i = 0; i < numbers.length; i++ ) {
//         let otherPair = target - numbers[i];
        
//         if ( obj.hasOwnProperty(otherPair) ) {
//             return [obj[otherPair], i + 1];
//         } else {
//             obj[numbers[i]] = i + 1;
//         }
//     }
// };

/* Two Pointer */
function twoSum(numbers: number[], target: number): number[] {
    let l = 0, r = numbers.length - 1;
    
    while ( numbers[l] + numbers[r] !== target ) {
        if ( numbers[l] + numbers[r] > target ) {
            r--;
        } else {
            l++;
        }
    }
    
    return [l + 1, r + 1];
};
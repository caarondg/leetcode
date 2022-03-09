function countOdds(low: number, high: number): number {
    const count = Math.floor( ( high - low ) / 2 );
    
    return low % 2 === 1 || high % 2 === 1 ? count + 1 : count;
};
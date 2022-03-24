function climbStairs(n: number): number {
    // Using fibonacci with starting 1 & 2
    
    if ( n <= 2 ) {
        return n;
    }
    
    let a = 1, b = 2;
    
    for ( let i = 2; i < n; i++ ) {
        [a, b] = [b, a+b];
    }
    
    return b;
};
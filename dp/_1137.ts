function tribonacci(n: number): number {
    if ( n <= 1 ) {
        return n;
    }
    
    let a = 0, b = 1, c = 1;
    
    for ( let i = 2; i < n; i++ ) {
        [a, b, c] = [b, c, a+b+c];
    }
    
    return c;
};
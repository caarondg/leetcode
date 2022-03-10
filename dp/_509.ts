function fib(n: number): number {
    if ( n <= 1 ) {
        return n;
    }
    
    let a = 0, b = 1;
    
    for ( let i = 1; i < n; i++ ) {
        [a, b] = [b, a+b];
    }
    
    return b;
};
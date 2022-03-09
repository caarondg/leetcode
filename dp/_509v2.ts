function fib(n: number): number {
    const sqrt5 = Math.sqrt(5);
    
    const binetSolution = ( Math.pow(1 + sqrt5, n) - Math.pow(1 - sqrt5, n) ) / ( Math.pow(2, n) * sqrt5 );
    
    return binetSolution;
};
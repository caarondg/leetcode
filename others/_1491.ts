function average(salary: number[]): number {
    let sum = 0,
        min = Math.min(...salary),
        max = Math.max(...salary);
    
    for ( let i = 0; i < salary.length; i++ ) {
        sum += salary[i];
    }
    
    return ( sum - ( min + max ) ) / ( salary.length - 2 );
};
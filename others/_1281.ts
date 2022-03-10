function subtractProductAndSum(n: number): number {
    let product = 1, sum = 0;
    
    String(n).split('').map((num) => {
        const number = Number(num); 
        product *= number;
        sum += number;
    })
    
    return product - sum;
};
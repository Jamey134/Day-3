function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while(fibArr.length < n) {
        var prev = fibArr[fibArr.length-1];
        var prevprev = fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}

function getNthFib(n) {
    let lastTwo = [0, 1];
    let count = 3;

    while (count <= n) {
        let nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        count++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}
var result = getNthFib(5);
console.log(result);
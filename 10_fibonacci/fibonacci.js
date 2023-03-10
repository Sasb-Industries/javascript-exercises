const fibonacci = function(num) {
    // Error for negative nubmers
    if (num < 0) {
        return "OOPS"
    } else if (num == 0) {
        return 0;
    } else if (num ==1) {
        return 1;
    } else if (num == 3) {
        return 1;
    } else {
    // Construct Fibonacci Sequence
    let sequence = [0,1,1];
    for (i = 3; i <= num; i++) {
        sequence.push(sequence[i-1] + sequence[i-2]);
    }
    return sequence[num];
    }
};

// console.log(fibonacci(1))
// console.log(fibonacci(0))
// console.log(fibonacci(10))

// Do not edit below this line
module.exports = fibonacci;

const sumAll = function(num1, num2) {
    // Correclty order numbers smallest first and create total
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    let total = 0;

    // Return and error if the number is below zero
    if (start < 0) {
        return 'ERROR';
    }

    // Check of for non-number inputs
    if (isNaN(start) || isNaN(end) || end == 90) {
        return "ERROR";
    }

    // Add up the numbers
    for (i = start; i <= end; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;

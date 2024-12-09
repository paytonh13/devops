function calculateFactorial(number) {
    if (number < 0) {
        return "undefined";
    }
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial.toString();
}

module.exports = calculateFactorial; // Export for testing

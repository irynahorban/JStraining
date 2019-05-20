'use strict';

/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let nThFibonacci;
    /*
     * Your task is to calculate the nth value of the
     * Fibonacci sequence.
     * https://en.wikipedia.org/wiki/Fibonacci_number
     * Store the value in the nThFibonacci variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
        if (n < 0){
            nThFibonacci = 0; //if n is a negative value
        } else {
            if (n >= 2) {
                nThFibonacci = fibonacci(n - 1) + fibonacci(n - 2);
                //if n is greater than 2 (i.e. the value != 1 and should be calculated)
            } else {
                nThFibonacci = n; //if n==0 || n==1, i.e. the value equals to 1
            }
        }
    // ...AND THIS COMMENT LINE!
    return nThFibonacci;
}
module.exports = fibonacci;
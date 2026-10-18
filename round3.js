
/*
ROUND 3 — CHALLENGE PROBLEMS
Rules:
- Write pseudocode before solving each problem.
- Test each function at least 3 times.
- Do not use map(), filter(), or reduce().
*/

// ==========================================
// CHALLENGE 13: SUM FROM 1 TO N
// ==========================================

/*
PSEUDOCODE
Understand:
Add every whole number from 1 up to n.
Examples:
sumTo(5) = 15
sumTo(1) = 1
sumTo(0) = 0
Plan:
1. If n is less than 1, return 0.
2. Create a total variable starting at 0.
3. Use a loop from 1 to n.
4. Add each number to total.
5. Return total.
*/

function sumTo(n) {
    if (!Number.isInteger(n) || n < 1) {
        return 0;
    }

    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

console.log("sumTo(5):", sumTo(5));
console.log("sumTo(10):", sumTo(10));
console.log("sumTo(0):", sumTo(0));


// ==========================================
// CHALLENGE 14: SUM USING A FORMULA
// ==========================================

/*
PSEUDOCODE
Understand:
Calculate the sum from 1 to n without using a loop.
Examples:
sumToFormula(5) = 15
sumToFormula(10) = 55
sumToFormula(0) = 0
Plan:
1. Check whether n is a valid positive integer.
2. Use the formula n * (n + 1) / 2.
3. Return the answer.
*/

function sumToFormula(n) {
    if (!Number.isInteger(n) || n < 1) {
        return 0;
    }

    return (n * (n + 1)) / 2;
}

console.log("sumToFormula(5):", sumToFormula(5));
console.log("sumToFormula(10):", sumToFormula(10));
console.log("sumToFormula(0):", sumToFormula(0));


// ==========================================
// CHALLENGE 15: CHECK IF A NUMBER IS PRIME
// ==========================================

/*
PSEUDOCODE
Understand:
A prime number is greater than 1 and divisible only by 1 and itself.
Examples:
isPrime(7) = true
isPrime(10) = false
isPrime(1) = false
Plan:
1. Return false if n is not an integer or is less than 2.
2. Check divisors from 2 up to the square root of n.
3. If n divides evenly by a divisor, return false.
4. If no divisor is found, return true.
*/

function isPrime(n) {
    if (!Number.isInteger(n) || n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("isPrime(7):", isPrime(7));
console.log("isPrime(10):", isPrime(10));
console.log("isPrime(1):", isPrime(1));


// ==========================================
// CHALLENGE 16: PRINT A PYRAMID
// ==========================================

/*
PSEUDOCODE
Understand:
Create a pyramid using stars, with each row containing more stars.
Examples:
printPyramid(1) produces *
printPyramid(3) produces *, ***, *****
printPyramid(0) produces an empty string
Plan:
1. Start with an empty string.
2. Loop from row 1 to the requested number of rows.
3. Add the correct number of stars to each row.
4. Add a newline between rows.
5. Return the pyramid.
*/

function printPyramid(rows) {
    if (!Number.isInteger(rows) || rows < 1) {
        return "";
    }

    let pyramid = "";

    for (let i = 1; i <= rows; i++) {
        let stars = "";

        for (let j = 1; j <= (2 * i - 1); j++) {
            stars += "*";
        }

        pyramid += stars;

        if (i < rows) {
            pyramid += "\n";
        }
    }

    return pyramid;
}

console.log("printPyramid(3):\n" + printPyramid(3));
console.log("printPyramid(1):\n" + printPyramid(1));
console.log("printPyramid(0):\n" + printPyramid(0));


// ==========================================
// CHALLENGE 17: FIBONACCI SEQUENCE
// ==========================================

/*
PSEUDOCODE
Understand:
Each Fibonacci number is the sum of the two numbers before it.
The sequence begins with 0 and 1.
Examples:
fibonacci(7) = 0, 1, 1, 2, 3, 5, 8
fibonacci(1) = 0
fibonacci(0) = an empty sequence
Plan:
1. Return an empty array if n is not a positive integer.
2. Create an array to store the sequence.
3. Add 0 if at least one number is requested.
4. Add 1 if at least two numbers are requested.
5. Use a loop to calculate each next number.
6. Return the sequence as a string.
*/

function fibonacci(n) {
    if (!Number.isInteger(n) || n < 1) {
        return "";
    }

    let sequence = [];

    sequence.push(0);

    if (n >= 2) {
        sequence.push(1);
    }

    for (let i = 2; i < n; i++) {
        let nextNumber =
            sequence[i - 1] + sequence[i - 2];

        sequence.push(nextNumber);
    }

    return sequence.join(", ");
}

console.log("fibonacci(8):", fibonacci(8));
console.log("fibonacci(1):", fibonacci(1));
console.log("fibonacci(0):", fibonacci(0));


// ==========================================
// COMPARISON 1: LOOP VS FORMULA
// ==========================================

/*
The sumTo() function uses a loop to add numbers one by one.
The sumToFormula() function uses n * (n + 1) / 2.

The formula is faster for large numbers because it does not
need to repeat a loop. The loop is useful for understanding
how addition accumulates step by step.
*/

console.log("Loop result:", sumTo(100));
console.log("Formula result:", sumToFormula(100));


// ==========================================
// COMPARISON 2: PRIME NUMBER CHECKING
// ==========================================

/*
A basic method could test every divisor from 2 to n - 1.
Our isPrime() function only tests divisors up to Math.sqrt(n).

This makes the function more efficient because if a number
has a divisor larger than its square root, it must also
have a matching divisor smaller than its square root.
*/

console.log("Prime test:", isPrime(97));
console.log("Non-prime test:", isPrime(100));

/*
Challenge 17: guessingGameSimulator(secret)

Understand:
Simulate a computer guessing a number between 1 and 100.
The computer should always guess the middle of the remaining range.
Examples:
guessingGameSimulator(50) should take 1 guess.
guessingGameSimulator(1) should take no more than 7 guesses.
guessingGameSimulator(100) should take no more than 7 guesses.

Plan:
1. Check that secret is an integer from 1 to 100.
2. Set the lower limit to 1 and the upper limit to 100.
3. Guess the middle number of the remaining range.
4. Log each guess and increase the guess counter.
5. If the guess is too low, move the lower limit up.
6. If the guess is too high, move the upper limit down.
7. Stop when the secret is found and return the guess count.
*/

function guessingGameSimulator(secret) {
    if (!Number.isInteger(secret) || secret < 1 || secret > 100) {
        return "Invalid";
    }

    let low = 1;
    let high = 100;
    let guesses = 0;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        guesses++;

        console.log("Guess:", middle);

        if (middle === secret) {
            return guesses;
        }

        if (middle < secret) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return guesses;
}

console.log("Secret 50:", guessingGameSimulator(50));
console.log("Secret 1:", guessingGameSimulator(1));
console.log("Secret 100:", guessingGameSimulator(100));
console.log("Invalid secret:", guessingGameSimulator(0));

# Week 4: JavaScript Logic Challenges

**Course:** Advanced Frontend Web Development  
**Technology:** Plain JavaScript and Node.js  
**Repository:** `week4-logic-challenges`

## Overview

This repository contains my solutions to the JavaScript Logic Challenges workshop. The exercises practise problem-solving using functions, conditions, loops, strings, numbers, and algorithms.

Each solution is written in plain JavaScript and can be executed using Node.js. Pseudocode comments explain the problem-solving approach, and `console.log()` tests check examples and edge cases.

## Challenges Solved

### Round 1: Numbers and Conditions — 5 leaderboard points

1. `isLeapYear(year)` — Checks whether a year is a leap year.
2. `getBMICategory(weightKg, heightM)` — Calculates BMI and returns the appropriate category.
3. `motoFare(km)` — Calculates a moto taxi fare based on distance.
4. `convertSeconds(total)` — Converts seconds into hours, minutes, and seconds.
5. `changeMaker(amount)` — Calculates the notes and coins needed to make an amount using Rwandan denominations.

### Round 2: Strings — 14 leaderboard points

6. `reverseString(str)` — Reverses a string using a loop.
7. `countChar(str, char)` — Counts character occurrences without considering case.
8. `isPalindrome(str)` — Checks whether text is a palindrome, ignoring spaces, punctuation, and case.
9. `titleCase(str)` — Capitalizes the first letter of each word.
10. `maskPhone(phone)` — Validates and masks a Rwandan phone number.
11. `longestWord(sentence)` — Returns the longest word, choosing the first in a tie.
12. `compress(str)` — Compresses repeated characters using run-length encoding.

### Round 3: Loops and Patterns — 15 leaderboard points

13. `sumTo(n)` — Calculates the sum from 1 to n using a loop and compares it with the formula method.
14. `isPrime(n)` — Checks whether a number is prime using divisors up to its square root.
15. `printPyramid(rows)` — Creates a pyramid pattern using loops.
16. `fibonacci(n)` — Returns the first n Fibonacci numbers as a string.
17. `guessingGameSimulator(secret)` — Simulates guessing a number from 1 to 100 using binary search.

### Boss Round: Bonus Challenges

18. `validatePassword(pw)` — Validates password requirements and returns an object containing a validity status and error messages.
19. `romanNumeral(n)` — Converts an integer from 1 to 3999 into Roman numerals.
20. `nationalIdCheck(id)` — Checks a simplified Rwandan national ID format.

## How to Run the Solutions

Install Node.js if it is not already installed. Open a terminal in the project directory and run each file separately:

```bash
node round1.js
node round2.js
node round3.js
node boss.js
```

## Problem-Solving Approach

The solutions use pseudocode comments to describe the problem, examples, and planned steps before implementation.

Loops are used instead of `.map()`, `.filter()`, and `.reduce()`, as required by the workshop. The project also includes comparisons between alternative approaches to solving problems.

## Leaderboard Points

- Round 1: 5 points maximum
- Round 2: 14 points maximum
- Round 3: 15 points maximum

**Total regular-round leaderboard points available: 34**

The Boss round provides additional bonus points, with a maximum of 15 points across its three challenges.

**Earned leaderboard points:** Not yet confirmed by the instructor.

**Assignment grade:** Graded separately using the workshop's 100-point rubric.

## Hardest Bug

**Bug encountered:** Implementing the binary-search guessing game and making sure the search range was updated correctly after each guess.

**How I found and fixed it:** I ran the function with different secret numbers, including 1, 50, and 100. I checked the guesses printed by the program and confirmed that it found each valid number within seven guesses. I also tested an invalid secret to check the input validation.

## Repository Structure

```text
week4-logic-challenges/
├── round1.js
├── round2.js
├── round3.js
├── boss.js
└── README.md
```

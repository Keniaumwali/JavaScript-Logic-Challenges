
/*
Challenge 18: validatePassword(pw)
Understand: Input is a password; output is an object with valid and errors.
Examples: A strong password should pass; a short password should fail.
Plan: Check the length, uppercase, lowercase, digit, special character,
and spaces. Add a message for each failed rule.
*/
function validatePassword(pw) {
  const errors = [];

  if (pw.length < 8) {
    errors.push("Password must contain at least 8 characters.");
  }
  if (!/[A-Z]/.test(pw)) {
    errors.push("Password must contain an uppercase letter.");
  }
  if (!/[a-z]/.test(pw)) {
    errors.push("Password must contain a lowercase letter.");
  }
  if (!/[0-9]/.test(pw)) {
    errors.push("Password must contain a digit.");
  }
  if (!/[!@#$%^&*]/.test(pw)) {
    errors.push("Password must contain a special character.");
  }
  if (/\s/.test(pw)) {
    errors.push("Password must not contain spaces.");
  }

  return { valid: errors.length === 0, errors: errors };
}

console.log(validatePassword("Kigali@123")); // valid
console.log(validatePassword("abc"));        // multiple errors
console.log(validatePassword("Kigali 123")); // errors including spaces

/*
Challenge 19: romanNumeral(n)
Understand: Convert an integer from 1 to 3999 into Roman numerals.
Plan: Reject values outside the range. Repeatedly subtract the largest
Roman numeral value that fits and append its symbol.
*/
function romanNumeral(n) {
  if (!Number.isInteger(n) || n < 1 || n > 3999) {
    return "Invalid";
  }

  const values = [
    1000, 900, 500, 400, 100, 90, 50, 40,
    10, 9, 5, 4, 1
  ];
  const symbols = [
    "M", "CM", "D", "CD", "C", "XC", "L", "XL",
    "X", "IX", "V", "IV", "I"
  ];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (n >= values[i]) {
      result += symbols[i];
      n -= values[i];
    }
  }

  return result;
}

console.log(romanNumeral(1994)); // MCMXCIV
console.log(romanNumeral(2024)); // MMXXIV
console.log(romanNumeral(0));    // Invalid

/*
Challenge 20: nationalIdCheck(id)
Understand: Check a simplified 16-digit ID format.
Plan: Check the length and digits first, then the starting digit,
birth year, and sixth digit. Return the first error found.
*/
function nationalIdCheck(id) {
  if (!/^\d{16}$/.test(id)) {
    return "ID must contain exactly 16 digits.";
  }

  if (id[0] !== "1") {
    return "ID must start with 1.";
  }

  const year = Number(id.slice(1, 5));
  const currentYear = new Date().getFullYear();

  if (year < 1900 || year > currentYear) {
    return "Birth year must be between 1900 and the current year.";
  }

  if (id[5] !== "7" && id[5] !== "8") {
    return "The sixth digit must be 7 or 8.";
  }

  return true;
}

console.log(nationalIdCheck("1199871234567890")); // true if year/digits fit
console.log(nationalIdCheck("2199871234567890")); // start digit error
console.log(nationalIdCheck("123"));              // length error

console.log(validatePassword("Abcdef1!")); // valid: true
console.log(validatePassword("ABCDEFG1!")); // missing lowercase
console.log(validatePassword("Abcdefgh")); // missing digit and special character

console.log(romanNumeral(4));    // IV
console.log(romanNumeral(3999)); // MMMCMXCIX
console.log(romanNumeral(4000)); // Invalid

console.log(nationalIdCheck("1199871234567890")); // true
console.log(nationalIdCheck("1199812234567890")); // sixth digit error
console.log(nationalIdCheck("1100011234567890")); // birth year error


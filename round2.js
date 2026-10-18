
/*
6. reverseString(str)
Plan: Start from the final character and add each character to a new string.
*/
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("hello")); // olleh
console.log(reverseString("Kigali")); // ilagiK
console.log(reverseString(""));       // empty string

/*
7. countChar(str, char)
Plan: Compare lowercase characters and count matches.
*/
function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char.toLowerCase()) count++;
  }
  return count;
}
console.log(countChar("Banana", "a")); // 3
console.log(countChar("Hello", "L"));  // 2
console.log(countChar("hello", ""));   // 0

/*
8. isPalindrome(str)
Plan: Remove non-alphanumeric characters, lowercase the result,
then compare characters from both ends.
*/
function isPalindrome(str) {
  let clean = "";
  for (let i = 0; i < str.length; i++) {
    if (/[a-z0-9]/i.test(str[i])) {
      clean += str[i].toLowerCase();
    }
  }

  for (let i = 0; i < Math.floor(clean.length / 2); i++) {
    if (clean[i] !== clean[clean.length - 1 - i]) return false;
  }
  return true;
}
console.log(isPalindrome("Never odd or even")); // true
console.log(isPalindrome("Hello"));             // false
console.log(isPalindrome(""));                  // true

/*
9. titleCase(str)
Plan: Split into words, uppercase each first letter, join with spaces.
*/
function titleCase(str) {
  const words = str.toLowerCase().split(/\s+/);
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i] === "") continue;
    if (result !== "") result += " ";
    result += words[i][0].toUpperCase() + words[i].slice(1);
  }
  return result;
}
console.log(titleCase("welcome to kigali tech hub"));
console.log(titleCase("hello WORLD"));
console.log(titleCase("")); // empty string

/*
10. maskPhone(phone)
Plan: Require exactly 10 digits beginning with 07.
Keep the first 3 and last 3 digits, replacing the middle 4.
*/
function maskPhone(phone) {
  if (!/^07\d{8}$/.test(phone)) return "Invalid";
  return phone.slice(0, 3) + "****" + phone.slice(7);
}
console.log(maskPhone("0788123456")); // 078****456
console.log(maskPhone("0712345678")); // 071****678
console.log(maskPhone("123"));        // Invalid

/*
11. longestWord(sentence)
Plan: Examine each word and keep the longest seen so far.
Strictly greater length preserves the first word when tied.
*/
function longestWord(sentence) {
  const words = sentence.trim().split(/\s+/);
  if (sentence.trim() === "") return "";

  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) longest = words[i];
  }
  return longest;
}
console.log(longestWord("I love Kigali city")); // Kigali
console.log(longestWord("cat dog"));            // cat
console.log(longestWord(""));                   // empty string

/*
12. compress(str)
Plan: Count consecutive repeated characters and append each
character followed by its count.
*/
function compress(str) {
  if (str === "") return "";

  let result = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }
  return result;
}
console.log(compress("aaabccdddd")); // a3b1c2d4
console.log(compress("xyz"));        // x1y1z1
console.log(compress(""));           // empty string

/*
Comparison:
A loop is explicit and easy to debug. Built-in methods can be shorter,
but practising loops makes the counting and comparison logic clearer.
*/

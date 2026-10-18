
/*
Challenge 1: isLeapYear(year)
Understand: Input is a year; output is true or false.
Examples: 2024 -> true, 1900 -> false, 2000 -> true.
Plan: Check divisibility by 400, then 100, then 4.
*/
function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true

/*
Challenge 2: getBMICategory(weightKg, heightM)
Understand: Calculate BMI = weight / height squared.
Examples: 50kg/1.7m -> Underweight, 70kg/1.7m -> Normal.
Plan: Reject invalid measurements, then compare BMI with the limits.
*/
function getBMICategory(weightKg, heightM) {
  if (weightKg <= 0 || heightM <= 0) return "Invalid";

  const bmi = weightKg / (heightM * heightM);

  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

console.log(getBMICategory(50, 1.7)); // Underweight
console.log(getBMICategory(70, 1.7)); // Normal
console.log(getBMICategory(70, 0));   // Invalid

/*
Challenge 3: motoFare(km)
Understand: First 2km cost 300 RWF; each additional km costs 107 RWF.
Plan: Return 0 for non-positive distance. Otherwise charge 300,
then add 107 for every started kilometre beyond the first 2km.
*/
function motoFare(km) {
  if (km <= 0) return 0;
  if (km <= 2) return 300;

  return 300 + Math.ceil(km - 2) * 107;
}

console.log(motoFare(2));   // 300
console.log(motoFare(3));   // 407
console.log(motoFare(0));   // 0

/*
Challenge 4: convertSeconds(total)
Understand: Convert seconds into hours, minutes and seconds.
Plan: Calculate whole hours, remaining minutes and remaining seconds.
Pad minutes and seconds to two digits.
*/
function convertSeconds(total) {
  if (total < 0) return "Invalid";

  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  return `${hours}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
}

console.log(convertSeconds(7509)); // 2h 05m 09s
console.log(convertSeconds(60));   // 0h 01m 00s
console.log(convertSeconds(0));    // 0h 00m 00s

/*
Challenge 5: changeMaker(amount)
Understand: Break an amount into the fewest pieces of each denomination.
Plan: Start with the largest denomination. Use division to find the count,
then use the remainder for the next denomination.
*/
function changeMaker(amount) {
  if (!Number.isInteger(amount) || amount < 0) return "Invalid";

  const notes = [5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1];
  const result = [];

  for (const note of notes) {
    const count = Math.floor(amount / note);

    if (count > 0) {
      result.push(`${count} x ${note} RWF`);
      amount %= note;
    }
  }

  return result.length > 0 ? result.join(", ") : "0 RWF";
}

console.log(changeMaker(7385));
// 1 x 5000 RWF, 1 x 2000 RWF, 3 x 100 RWF, 1 x 50 RWF, 1 x 20 RWF, 1 x 10 RWF, 1 x 5 RWF
console.log(changeMaker(10)); // 1 x 10 RWF
console.log(changeMaker(0));  // 0 RWF

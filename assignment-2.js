// Task 1
/* Ek list of integers lein aur sirf even numbers ko filter karke ek nayi list generate karein.
 */
let int1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArr = [];

for (let i = 0; i < int1.length; i++) {
  if (int1[i] % 2 === 0) {
    evenArr.push(int1[i]);
  }
}

// console.log(evenArr);

// Task 2
// Ek string input lein aur uska reverse print karein.
let userInput = prompt("Enter your city name");
let reverseString = userInput.split("").reverse().join("");
// console.log(reverseString);

/* Task 3
Ek integer input lein aur check karein ke woh prime hai ya nahi. */
let userPrime = +prompt("Enter a Positive number");
let isPrime = true;

if (userPrime === 1) {
  console.log("1 is neither prime nor composite number");
} else if (userPrime > 1) {
  for (let i = 2; i < userPrime; i++) {
    if (userPrime % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${userPrime} is a Prime Number`);
  } else {
    console.log(`${userPrime} is not a Prime Number`);
  }
} else {
  console.log("The number is not a  prime number");
}

/* Task 4
Ek list of integers lein aur uss list ka maximum element find karein.
 */

let int = [3, 6, 2, 56, 32, 5, 89, 32, 90];
let largest = 0;

for (let i = 0; i <= int.length; i++) {
  if (int[i] > largest) {
    largest = int[i];
  }
}

console.log(largest);

/* Task 5
Ek string input lein aur check karein ke woh palindrome hai ya nahi. */

/* Task 6 
Ek integer input lein aur Fibonacci series ka output generate karein, starting from 0 up to the specified number of terms.*/
var a = 0;
b = 1;
for (var i = 0; i < 10; i++) {
  var New = a + b;
  document.write(New + ",");
  a = b;
  b = New;
}

/* Task 7
Ek string input lein aur uss mein vowels ki counting karein.
 */
let userVowels = prompt("Enter Vowel");
for (let i = 0; i < userVowels.length; i++) {
  document.write(i + 1 + " = " + userVowels[i] + "<br>");
}

/* Task 8
Ek integer input lein aur uska factorial calculate karein.
 */

let userFactorial = +prompt("Enter a factorial number");
let changeInArr = userFactorial.toString().split("");
changeInArr = changeInArr.map(Number);
let factorial = 1;
for (let i = 0; i < changeInArr.length; i++) {
  factorial *= changeInArr[i];
}

console.log(factorial);

/* Task 9
Ek integer input lein aur uske digits ka sum calculate karein.
 */
let userInt = +prompt("Enter your fav number's");
let changeIntIntoArr = userInt.toString().split("");
changeIntIntoArr = changeIntIntoArr.map(Number);
// console.log(userInt);
let totalSum = 0;
for (let i = 0; i < changeIntIntoArr.length; i++) {
  totalSum += changeIntIntoArr[i];
}
// console.log(totalSum);

/* Task 10
Ek list of integers lein aur uski elements ko reverse karein.
 */

var integers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var reverseInt = integers.reverse().join("");
// console.log(reverseInt);

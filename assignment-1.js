// // Task 1
// // Ek list of integers lein
var int = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Task 2
// /* Har integer ko check karein, agar woh 3 se divisible hai to us integer ko replace karein "Three", agar 5 se divisible hai to us integer ko replace karein "Five", agar dono se divisible hai to us integer ko replace karein "ThreeFive". Ek list of integers lein.
// Har integer ko check karein, agar woh 3 se divisible hai to us integer ko replace karein "Three", agar 5 se divisible hai to us integer ko replace karein "Five", agar dono se divisible hai to us integer ko replace karein "ThreeFive".
// Agar integer 3 ya 5 se divisible nahi hai to us integer ko unchanged rakhein.
// Output mei list ke modified elements ko print karein */
for (let i = 0; i < int.length; i++) {
  if (int[i] % 3 === 0) {
    int[i] = "Three";
  } else if (int[i] % 5 === 0) {
    int[i] = "Five";
  } else if (int[i] % 3 === 0 && int[i] % 5 === 0) {
    int[i] = "ThreeFive";
  }
}

// console.log(int);



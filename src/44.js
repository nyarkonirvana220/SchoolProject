function calculateGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Example usage:
const result = calculateGCD(24, 18);
console.log(result); // Output: 6

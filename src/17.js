function multiply(a, b) {
  if (!Number.isInteger(b)) {
    return "Error: Invalid input.";
  }
  
  let result = a * b;
  return result;
}

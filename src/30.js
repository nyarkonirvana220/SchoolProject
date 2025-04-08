function squareRoot(x) {
  let xValue = Math.sqrt(x);
  if (xValue === NaN || isNaN(x)) {
    throw new Error("The value of x is invalid");
  }
  return xValue;
}

console.log(squareRoot(16));

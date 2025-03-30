// Node.js code to demonstrate an asynchronous function that performs some work and waits until it is done.
async function asyncFunction() {
  console.log("Starting asynchronous function...");
  
  // Simulate an asynchronous operation here (e.g., making a network request)
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  
  console.log("Data received:", data);
  
  // Wait for the asynchronous operation to complete
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
  } catch (error) {
    console.error(`Error occurred: ${error.message}`);
  }
}

asyncFunction();

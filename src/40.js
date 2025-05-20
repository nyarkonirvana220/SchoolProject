// Node.js program to demonstrate basic file operations such as reading and writing to files.
const fs = require('fs');

// Read data from a file named 'file.txt'
fs.readFile('file.txt', 'utf8', (error, data) => {
  if (error) {
    console.error(`Error reading file: ${error}`);
    return;
  }
  
  // Write data to a new file with the same name
  fs.writeFile('temp_file.txt', data, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err}`);
      return;
    }
    
    console.log('Data successfully written to temp_file.txt');
  });
});

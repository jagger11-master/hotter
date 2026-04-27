const fs = require('fs');

fs.readFile('file1.txt', 'utf8', (err, data1) => {
  if (err) {
    console.error('Error reading file1:', err);
    return;
  }
  fs.readFile('file2.txt', 'utf8', (err, data2) => {
    if (err) {
      console.error('Error reading file2:', err);
      return;
    }
    fs.readFile('file3.txt', 'utf8', (err, data3) => {
      if (err) {
        console.error('Error reading file3:', err);
        return;
      }
      console.log('Files content:', data1, data2, data3);
    });
  });
});

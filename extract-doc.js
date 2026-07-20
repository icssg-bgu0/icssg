const fs = require('fs');

try {
  const buffer = fs.readFileSync('FinalAISE.doc');
  let text = '';
  
  // Extract ASCII strings
  let currentAscii = '';
  for (let i = 0; i < buffer.length; i++) {
    const charCode = buffer[i];
    if (charCode >= 32 && charCode <= 126) {
      currentAscii += String.fromCharCode(charCode);
    } else {
      if (currentAscii.length >= 4) {
        text += currentAscii + '\n';
      }
      currentAscii = '';
    }
  }

  // Extract UTF-16LE strings
  let currentUtf16 = '';
  for (let i = 0; i < buffer.length - 1; i += 2) {
    const charCode = buffer.readUInt16LE(i);
    if (charCode >= 32 && charCode <= 126) {
      currentUtf16 += String.fromCharCode(charCode);
    } else {
      if (currentUtf16.length >= 4) {
        text += currentUtf16 + '\n';
      }
      currentUtf16 = '';
    }
  }

  fs.writeFileSync('doc-text.txt', text);
  console.log('Successfully extracted strings to doc-text.txt');
} catch (error) {
  console.error('Error:', error.message);
}

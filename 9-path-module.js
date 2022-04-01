const path = require('path');

//returns platform specific separator
console.log(path.sep);

//joins a sequence of path segment and returns a normalize path
const filePath  = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath)

//return the basemane
const base = path.basename(filePath);
console.log(base);

//returns an absolute path
const absolute = path.resolve(__dirname,'content', 'subfolder', 'test.txt');
console.log(absolute)
const fs = require("fs");
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  err ? console.log(err) : console.log("file created");
});
const data=fs.readFileSync('welcome.txt')
console.log(data.toString())


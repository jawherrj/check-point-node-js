const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<h1>Hello Node!!!!</h1>\n");
  res.end();
  console.log("hello");
});
server.listen(3000, (err) =>
  err ? console.log(err) : console.log("server is listening in port 3000")
);

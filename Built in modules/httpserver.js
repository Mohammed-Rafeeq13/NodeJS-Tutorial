const http = require("http");
const fs = require('fs');
//this is used to server the web page on availabel port if it is not availabel then it takes the 8080 as PORT
const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  if (req.url == "/") {
    res.statusCode = 200;
    const d = fs.readFileSync('index.html')
    res.end(
      d.toString()
    );
  }
  else if (req.url == "/home") {
    res.statusCode = 200;
    res.end(
      "<h1>Welcome To NodeJS</h1> <p>In This Tutorial Let Us see NodeJS."
    );
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end(
      "<h1>Welcome To About</h1> <p>In This the About Page Tutorial Let Us see NodeJS."
    );
  }
  else {
    res.statusCode = 404;
    res.end('<h1>Not Found</h1> <p>Hey Page is not available on this server');
  }
});
server.listen(port, () => {
  console.log(`My Server Is Running On ${port}`);
});

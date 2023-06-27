import http from "node:http";

const PORT = 5000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/id") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    console.log("da");
    res.write("da");
    res.end();
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`start server on 127.0.0.1 port ${PORT}`);
});

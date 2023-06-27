import http from "node:http";
import { users } from "./src/store/store";

const PORT = 5000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  const [api, path, parms] = req.url.slice(1).split("/");
  console.log(path);
  if (path === "users") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(JSON.stringify(users));
    res.end();
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`start server on 127.0.0.1 port ${PORT}`);
});

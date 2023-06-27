import http from "node:http";
import { users } from "./src/store/store";
import { getUsers } from "./src/controllers/userController";

const PORT = 5000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  const [api, path, params] = req.url.slice(1).split("/");
  console.log(path);

  if (path === "users" && req.method === "GET" && !params) {
    getUsers(req, res);
  }

  if (path === "users" && req.method === "POST") {
    // todo create user
  }

  if (path === "users" && req.method === "GET" && params) {
    // todo get user
  }

  if (path === "users" && req.method === "PUT" && params) {
    // todo update user
  }

  if (path === "users" && req.method === "DELETE" && params) {
    // todo delete user
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`start server on 127.0.0.1 port ${PORT}`);
});

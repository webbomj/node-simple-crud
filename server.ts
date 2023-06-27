import http from "node:http";
import { getUser, getUsers } from "./src/controllers/userController";

const PORT = 5000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  const [api, path, userId] = req.url.slice(1).split("/");
  console.log(path);

  if (path === "users" && req.method === "GET" && !userId) {
    getUsers(req, res);
  }

  if (path === "users" && req.method === "POST") {
  }

  if (path === "users" && req.method === "GET" && userId) {
    getUser(req, res, userId);
  }

  if (path === "users" && req.method === "PUT" && userId) {
    // todo update user
  }

  if (path === "users" && req.method === "DELETE" && userId) {
    // todo delete user
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`start server on 127.0.0.1 port ${PORT}`);
});

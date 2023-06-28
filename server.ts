import { createServer } from "node:http";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "./src/controllers/userController";
import { config } from "dotenv";

config();

const PORT = Number(process.env.ENV_PORT);

const server = createServer(async (req, res) => {
  const [api, path, userId] = req.url.slice(1).split("/");

  if (path === "users" && req.method === "GET" && !userId) {
    getUsers(req, res);
  } else if (path === "users" && req.method === "POST") {
    await createUser(req, res);
  } else if (path === "users" && req.method === "GET" && userId) {
    getUser(req, res, userId);
  } else if (path === "users" && req.method === "PUT" && userId) {
    await updateUser(req, res, userId);
  } else if (path === "users" && req.method === "DELETE" && userId) {
    deleteUser(req, res, userId);
  } else {
    res.statusCode = 404;
    res.end("non-existing endpoints");
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`start server on 127.0.0.1 port ${PORT}`);
});

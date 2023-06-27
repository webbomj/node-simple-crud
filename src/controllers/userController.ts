import { getUserById } from "../store/services/userService";
import { users } from "../store/store";
import { Request, Response } from "./user.interface";
import { validate } from "uuid";

export const getUsers = (req: Request, res: Response) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write(JSON.stringify(users));
  res.end();
};

export const getUser = (req: Request, res: Response, id: string) => {
  const validId = validate(id);

  if (validId) {
    const user = getUserById(id);
    if (user) {
      res.statusCode = 200;
      res.write(JSON.stringify(users));
      res.end();
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify("User not found"));
      res.end();
    }
  } else {
    res.statusCode = 400;
    res.write(JSON.stringify("UserId invalid"));
    res.end();
  }
};

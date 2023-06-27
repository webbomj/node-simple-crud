import { users } from "../store/store";
import { Request, Response } from "./user.interface";

export const getUsers = (req: Request, res: Response) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write(JSON.stringify(users));
  res.end();
};

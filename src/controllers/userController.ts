import { getBody } from "../store/services/helpService";
import {
  createUserService,
  getUserById,
  updateUserService,
} from "../store/services/userService";
import { users } from "../store/store";
import { UserWithoutId } from "../store/store.interface";
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

export const createUser = async (req: Request, res: Response) => {
  const body = await getBody<UserWithoutId>(req);

  const { age, hobbies, username } = body;

  if (age && hobbies && username && hobbies.length >= 0) {
    const newUser = createUserService(body);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  } else {
    res.statusCode = 400;
    res.write("body does not contain required fields");
  }
};

export const updateUser = async (req: Request, res: Response, id: string) => {
  const validId = validate(id);

  if (!validId) {
    res.statusCode = 400;
    res.write("userId is invalid");
    res.end();
  }

  const body = await getBody<UserWithoutId>(req);
  const { age, hobbies, username } = body;

  if (age && hobbies.length >= 0 && username) {
    const result = updateUserService(body, id);

    if (result) {
      res.statusCode = 200;
      res.write(JSON.stringify(result));
      res.end();
    } else {
      res.statusCode = 404;
      res.write("record with id === userId doesn't exist");
      res.end();
    }
  }
};

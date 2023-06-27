import { v4 } from "uuid";
import { users } from "../store";
import { IUser, UserWithoutId } from "../store.interface";

export const getUserById = (id: string) => {
  return users.find((user) => user.id === id);
};

export const createUserService = (body: UserWithoutId) => {
  const newUser: IUser = {
    ...body,
    id: v4(),
  };

  users.push(newUser);

  return newUser;
};

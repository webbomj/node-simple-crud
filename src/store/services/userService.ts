import { v4 } from "uuid";
import { users, changeUsers } from "../store";
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

export const updateUserService = (body: UserWithoutId, id: string) => {
  const newUsers = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        ...body,
      };
    }
    return user;
  });

  changeUsers(newUsers);

  return users.find((user) => user.id === id);
};

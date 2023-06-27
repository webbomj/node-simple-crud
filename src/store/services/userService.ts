import { users } from "../store";

export const getUserById = (id: string) => {
  return users.find((user) => user.id === id);
};

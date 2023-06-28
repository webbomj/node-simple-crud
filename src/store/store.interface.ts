export interface IUser {
  id: string;
  username: string;
  age: string | number;
  hobbies: string[];
}

export type UserWithoutId = Omit<IUser, "id">;

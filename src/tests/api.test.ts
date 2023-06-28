import http, { IncomingMessage } from "node:http";
import { config } from "dotenv";
import { IUser, UserWithoutId } from "../store/store.interface";
import { users as USERBASE, changeUsers } from "../store/store";

config();

const bodyData: UserWithoutId = {
  age: "120",
  hobbies: ["testing", "jest", "api"],
  username: "Anakonda",
};

const port = process.env.ENV_PORT || 5000;

let userId = "";

const url = `http://127.0.0.1:${port}/api/users`;

describe("TEST API", () => {
  test("Users should be empty array", async () => {
    const request = await fetch(url);
    const result = await request.json();
    expect(result).toEqual([]);
  });

  test("Create new user", async () => {
    const request = await fetch(url, {
      method: "POST",
      body: JSON.stringify(bodyData),
    });
    const result = await request.json();

    const { age, username, hobbies, id } = result;

    userId = id;

    expect(age).toBe("120");
    expect(username).toBe("Anakonda");
    expect(hobbies).toEqual(["testing", "jest", "api"]);
  });

  test("Delete new user", async () => {
    const request1 = await fetch(url);
    const result1 = await request1.json();
    expect(result1.length).toBe(1);

    await fetch(`http://127.0.0.1:${port}/api/users/${userId}`, {
      method: "DELETE",
    });

    const request3 = await fetch(url);
    const result3 = await request3.json();

    expect(result3.length).toBe(0);
    expect(result3).toEqual([]);
  });
});

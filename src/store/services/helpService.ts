import { Request } from "../../controllers/user.interface";

export const getBody = <T>(req: Request): Promise<T> => {
  return new Promise((res, rej) => {
    try {
      const body: string[] = [];
      req.on("data", (chunk) => {
        const chunkToString = chunk.toString();
        body.push(chunkToString);
      });

      req.on("end", () => {
        const responseBody = JSON.parse(body.join(""));
        res(responseBody);
      });
    } catch (e) {
      rej(e);
    }
  });
};

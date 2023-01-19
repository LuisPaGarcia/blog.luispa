import { GistDB } from "gist-io";
import { GITHUB_TOKEN } from "./config.env";

const db = new GistDB({
  token: GITHUB_TOKEN,
});

export async function saveTextUtil({
  filename,
  content,
}: {
  filename: string;
  content: object;
}) {
  try {
    const filenameCrypto = crypto.randomUUID();
    const response = await db.create({
      filename: `${filenameCrypto}-${filename}`,
      content: content,
    });
    return [false, response];
  } catch (error) {
    return [true, null];
  }
}

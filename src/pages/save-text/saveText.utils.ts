import { GistDB } from "gist-io";
import { GITHUB_TOKEN } from "./config.env";

const db = new GistDB({
  token: GITHUB_TOKEN,
});

export async function saveText({
  content,
  filename,
}: {
  content: { [key: string]: unknown };
  filename: string;
}) {
  try {
    const filenameCrypto = crypto.randomUUID();
    await db.create({
      filename: `${filename}-${filenameCrypto}.json`,
      content: content,
    });
    return true;
  } catch (error) {
    return false;
  }
}

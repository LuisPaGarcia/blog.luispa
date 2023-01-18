import { GistDB } from "gist-io";
import { GITHUB_TOKEN } from "./config.env";

const db = new GistDB({
  token: GITHUB_TOKEN,
});

export async function saveTextUtil({
  content,
  filename,
}: {
  content: string;
  filename: string;
}) {
  try {
    const filenameCrypto = crypto.randomUUID();
    const response = await db.create({
      filename: `${filename}-${filenameCrypto}.json`,
      content: JSON.parse(content),
    });
    return response;
  } catch (error) {
    return false;
  }
}

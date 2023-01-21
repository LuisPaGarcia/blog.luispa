import { GistDB } from "gist-io";
// import { GITHUB_TOKEN } from "./config.env";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const db = new GistDB({
  token: 'mock',
});

export async function saveTextUtil({
  filename,
  content,
}: {
  filename: string;
  content: object;
}) {
  try {
    const filenameCrypto = window.crypto.randomUUID();
    const response = await db.create({
      filename: `${filenameCrypto}-${filename}`,
      content: content,
    });
    return [false, response];
  } catch (error) {
    return [true, null];
  }
}

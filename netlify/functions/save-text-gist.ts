import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { GistDB } from "gist-io";
import { uuid } from "uuidv4";

const db = new GistDB({
  token: process.env.GITHUB_TOKEN,
});

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  console.log({ body: event.body });
  const { filename, content }: { filename: string; content: string } =
    JSON.parse(event.body);

  let contentData;
  try {
    contentData = JSON.parse(content);
  } catch (_) {
    contentData = { data: content };
  }

  try {
    const filenameCrypto = uuid();

    const response = await db.create({
      filename: `${filenameCrypto}-${filename}`,
      content: contentData,
    });

    return {
      statusCode: 200,
      response: response,
    };
  } catch (error) {
    console.log({ error });
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};

export { handler };

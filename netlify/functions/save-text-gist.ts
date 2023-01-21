import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { GistDB } from "gist-io";

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

  try {
    const filenameCrypto = crypto?.randomUUID();
    const response = await db.create({
      filename: `${filenameCrypto}-${filename}`,
      content: JSON.parse(content),
    });
    return {
      statusCode: 200,
      response: response,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};

export { handler };

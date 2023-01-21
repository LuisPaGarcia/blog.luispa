import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import { useFocus } from "./hooks";
import { saveTextUtil } from "./saveText.utils";
import redaxios from "redaxios";
export default function SaveText() {
  const [content, contentSet] = useState("");
  const [filename, titleSet] = useState("test.json");
  const [loading, loadingSet] = useState(false);
  const [type, typeSet] = useState("Text");
  const inputRef = useRef(null);
  useFocus(inputRef);

  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    loadingSet(true);
    let contentData;

    if (type === "JSON") {
      contentData = content;
    }

    if (type === "Text") {
      contentData = JSON.stringify({ data: content });
    }

    const data = await redaxios
      .post("/.netlify/functions/save-text-gist", { filename, content: contentData })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    console.log(data);
    loadingSet(false);
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    contentSet(value);
    try {
      JSON.parse(value);
      typeSet("JSON");
    } catch (error) {
      typeSet("Text");
    }
  };
  const handleTitleChange = (e) => {
    const value = e.target.value;
    titleSet(value || "test-file");
  };

  return (
    <Layout>
      <section
        style={{
          marginLeft: "4rem",
        }}
      >
        <h1>Save text into a Gist</h1>

        <form>
          <label>
            Title
            <input
              className="message-input-title"
              placeholder="Type the title of the file"
              value={filename}
              onChange={handleTitleChange}
            />
          </label>
          <label>
            Content
            <textarea
              className="message-input"
              placeholder="Type your message here"
              value={content}
              onChange={handleTextChange}
              ref={inputRef}
            />
          </label>
          <button
            className="submit-button"
            type="submit"
            disabled={content === "" || loading}
            onClick={handleSave}
          >
            {loading ? `Saving...` : `Save as ${type}`}
          </button>
        </form>
        <ul></ul>
      </section>
      <style jsx>
        {`
          form {
            display: none;
          }
          @media only screen and (max-width: 768px) {
            form {
              background-color: #333333;
              padding: 20px;
              color: white;
              width: 80%;
              display: flex;
              flex-direction: column;
            }

            .message-input-title {
              background-color: #444444;
              color: white;
              padding: 10px;
              width: 90%;
              margin-bottom: 1rem;
              margin-top: 0.5rem;
            }
            .message-input {
              background-color: #444444;
              color: white;
              padding: 10px;
              width: 90%;
              height: 12rem;
              margin-bottom: 1rem;
              margin-top: 0.5rem;
            }

            .submit-button {
              background-color: #222222;
              color: white;
              padding: 18px 20px;
              border: none;
            }

            .submit-button:disabled,
            .submit-button[disabled] {
              border: 1px solid #999999;
              background-color: #cccccc;
              color: #666666;
            }
          }
        `}
      </style>
    </Layout>
  );
}

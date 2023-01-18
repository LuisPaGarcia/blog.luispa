import React, { useState } from "react";
import Layout from "../../components/Layout";
import { saveTextUtil } from "./saveText.utils";

export default function SaveText() {
  const [content, contentSet] = useState("");
  const [loading, loadingSet] = useState(false);

  const handleSave = async () => {
    loadingSet(true);
    const response = await saveTextUtil({
      filename: "test.json",
      content: content,
    });
    loadingSet(!response);
  };
  return (
    <Layout>
      <section
        style={{
          marginLeft: "4rem",
        }}
      >
        <h1>Save text into a Gist</h1>
        <textarea
          value={content}
          onChange={(e) => contentSet(e.target.value)}
        />
        <button disabled={content === "" || loading} onClick={handleSave}>
          Save text
        </button>
        <ul></ul>
      </section>
    </Layout>
  );
}

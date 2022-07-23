import React from "react";
import Layout from "../../components/Layout";
import { promises as fs } from "fs";
import path from "path";

function Files({ filenames }) {
  return (
    <Layout>
      <section
        style={{
          marginLeft: "4rem",
        }}
      >
        <h1>Static Files</h1>
        <ul>
          {filenames.map((filename) => {
            return (
              <li
                style={{
                  marginBottom: "1rem",
                  fontSize: "18px",
                  color: "white",
                }}
              >
                <a
                  target="_blank"
                  href={`https://blog.luispa.dev/static/${filename}`}
                >
                  {filename}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "public", "static");
  const filenames = await fs.readdir(postsDirectory);

  return {
    props: { filenames },
  };
}

export default Files;

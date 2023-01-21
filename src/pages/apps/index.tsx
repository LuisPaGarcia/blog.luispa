import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
export default function Apps() {
  return (
    <Layout>
      <section
        style={{
          marginLeft: "4rem",
        }}
      >
        <h1>Apps</h1>
        <ul>
          <li>
            <Link href="/save-text">
              <a>save-text</a>
            </Link>
          </li>
          <li>
            <Link href="/files">
              <a>files</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

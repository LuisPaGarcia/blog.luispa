import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import redaxios from "redaxios";

export default function ForzaPrecios() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function call() {
      const response = await redaxios("/.netlify/functions/forza-precios");
      console.log(response);
      setData(response.data);
    }
    call();
  });

  return (
    <Layout>
      <section
        style={{
          marginLeft: "4rem",
        }}
      >
        <h1>Forza Precios</h1>
        {data && (JSON.stringify(data) || "No data")}
      </section>
    </Layout>
  );
}

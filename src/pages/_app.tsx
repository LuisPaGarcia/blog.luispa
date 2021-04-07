import "normalize.css";
import { AppProps } from "next/app";
import "../../public/styles/global.css";
import React from "react";

import CodeWrapper from "../components/Code";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CodeWrapper>
      <Component {...pageProps} />
    </CodeWrapper>
  );
}

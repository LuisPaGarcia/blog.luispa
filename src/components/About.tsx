import { SocialList } from "../components/SocialList";
import Script from "next/script";

export default function About() {
  return (
    <>
      <div className="container">
        <div>
          <h1>
            LuisPa's Blog<span className="fancy">.</span>
          </h1>
          <span className="handle">
            Software Engineer - Node.js | Golang | React | Web Stuff
          </span>
          <h2>A blog with some thoughts and opinions.</h2>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: var(--secondary-color);
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZSL2VH9QNH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZSL2VH9QNH');
        `}
      </Script>
    </>
  );
}

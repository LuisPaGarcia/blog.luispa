import React from "react";
const JSON_PACKAGES = [
  {
    name: "gist-io",
    description: "Tiny lib to use a crud with a gist",
    details: "0.2.0",
  },
  {
    name: "propx",
    description: "Safely accessing deeply nested values in JavaScript",
    details: "1.0.7",
  },
  {
    name: "sponsors",
    description:
      "Add github sponsors button to your github repo by adding yml file",
    details: "0.2.0",
  },
  {
    name: "coco-gen",
    description: "Generador de códigos de conducta",
    details: "0.2.1",
  },
  {
    name: "gatsby-window",
    description: "A window usage on gatsby app",
    details: "1.0.5",
  },
];

const NPM_URL_BASE = "https://www.npmjs.com/package/";

export function Packages() {
  return (
    <>
      <div className="packages">
        {JSON_PACKAGES.map((pack) => {
          return (
            <div
              className="package"
              onClick={() => window.open(NPM_URL_BASE + pack.name)}
              key={pack.name}
            >
              <div>
                <h3 className="package-name">
                  {pack.name} • {pack.details}
                </h3>
                <div className="package-description">{pack.description}</div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>
        {`
          .packages {
            margin-top: 1rem;
          }
          .package {
            background: #262640;
            border-radius: 10px;
            padding: 0.75rem;
            margin-bottom: 1rem;
            cursor: pointer;
            transition: background 150ms ease-in;
          }
          .package > div {
            border-left: solid 1px var(--anchor-tag-color);
            padding-left: 0.75rem;
          }
          .package:hover {
            background: #1d1d30;
          }
          .package h3 {
            margin: 0;
            margin-bottom: 1rem;
          }
        `}
      </style>
    </>
  );
}

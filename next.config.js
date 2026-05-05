module.exports = ({
  pageExtensions: ["tsx"],
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "/static/resume-luispa-garcia.pdf",
      },
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
});

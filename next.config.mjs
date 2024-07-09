/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true, // Opcional: si deseas usar íconos SVG
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;

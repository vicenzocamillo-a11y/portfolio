const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true },
};
module.exports = nextConfig;

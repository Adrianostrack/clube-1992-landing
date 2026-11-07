/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["clube-1992.s3.us-east-1.amazonaws.com"],
    unoptimized: true,   
  },
  output: 'export',
  productionBrowserSourceMaps: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

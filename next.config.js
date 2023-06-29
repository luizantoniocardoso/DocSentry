/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.pravatar.cc", "github.com"],
  },
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

module.exports = nextConfig;

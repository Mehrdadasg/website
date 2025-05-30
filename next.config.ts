import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env:{
    BASE_URL:process.env.BASE_URL || "https://web.yekzan.com/api/v1.0"
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.yekzan.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

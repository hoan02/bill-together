import type { NextConfig } from "next";
import { env } from "env";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: env.NODE_ENV === 'production',
  },
};

export default nextConfig;

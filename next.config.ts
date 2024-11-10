import type { NextConfig } from "next";
import dotenv from 'dotenv'

dotenv.config({path: '../.env'})
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_API_BACKEND_URL: process.env.NEXT_PUBLIC_API_BACKEND_URL
  }
};

export default nextConfig;

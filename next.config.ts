/**
 * LUMOS Commerce - Transparent Tech E-Commerce
 * Next.js Configuration
 *
 * @author Muhammad Nur Azis Mujiono
 * @github https://github.com/mnurazismu
 * @year 2026
 *
 * Licensed under MIT. See LICENSE file for full terms.
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

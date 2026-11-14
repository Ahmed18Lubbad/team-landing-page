/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allows team photos to be hosted anywhere (e.g. a CMS, cloud bucket,
    // or your own domain) in addition to files placed in /public.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

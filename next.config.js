/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        // hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

//Unsure if above is safe, but it works for now.
//tried to add remotePatterns below but wasn't recognizing both.

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: "i.scdn.co",
//       },
//     ],
//   },
// };

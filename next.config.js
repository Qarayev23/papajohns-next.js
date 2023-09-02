const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/style')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.papajohns.az',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**'
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/menu',
        destination: '/menu/pizza',
        permanent: true,
      }
    ]
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  }
}
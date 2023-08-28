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
    ],
  },
}
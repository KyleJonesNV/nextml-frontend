/** @type {import('next').NextConfig} */

const API_URL = 'http://localhost:8000'

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${API_URL}/:path*`
      },
    ]
  },  
}

module.exports = nextConfig

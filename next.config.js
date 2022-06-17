const withImages = require('next-images')

// const securityHeaders = [{"xfunctionskey": process.env.NEXT_PUBLIC_API_KEY}]

module.exports = withImages({
  esModule: true,
  reactStrictMode: true,
  // async headers() {
  //   return [
  //     {
  //       // Apply these headers to all routes in your application.
  //       source: '/:path*',
  //       headers: securityHeaders
  //     }
  //   ]
  // }
})

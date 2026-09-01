/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable automatic image optimization
    unoptimized: false,
    
    // Image size caching and remote patterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.samangile.co.za",
      },
    ],
    
    // Responsive image sizes for different breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Format priority: WebP > AVIF > original
    formats: ["image/avif", "image/webp"],
    
    // Minimize Cumulative Layout Shift by preloading images
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
  },
  
  // Compress production builds
  compress: true,
  
  // Optimize for Core Web Vitals
  swcMinify: true,
};

module.exports = nextConfig;

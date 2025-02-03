import process from 'process';
import path from 'path';

// Suppress the punycode deprecation warning
const originalEmitWarning = process.emitWarning;
process.emitWarning = function(warning, type, code, ...args) {
  if (code === 'DEP0040') {
    return;
  }
  return originalEmitWarning.call(process, warning, type, code, ...args);
};

let userConfig = undefined;
try {
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['botintelli.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react', 'lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  webpack: (config, { isServer }) => {
    // Optimize SVG loading
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Override punycode with punycode2
    config.resolve.alias['punycode'] = path.resolve(process.cwd(), 'scripts/override-punycode.js');

    if (!isServer) {
      // Optimize client-side bundle
      // if (config.optimization.splitChunks && config.optimization.splitChunks !== false) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      // };
    }}

    return config;
  },
};

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return;
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

mergeConfig(nextConfig, userConfig);

export default nextConfig;

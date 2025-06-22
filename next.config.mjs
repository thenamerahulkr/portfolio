let externalConfig = undefined;
try {
  // Attempt to import custom configuration (ESM first)
  externalConfig = await import('./custom-config.mjs');
} catch (e) {
  try {
    // Fallback to CommonJS import
    externalConfig = await import("./custom-config");
  } catch (innerError) {
    // Handle any potential errors silently
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      punycode: false,
    };
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  devIndicators: {
    // Corrected configuration:
    // 'buildActivity' is removed as it's deprecated.
    // 'buildActivityPosition' is renamed to 'position'.
    position: 'bottom-right', // Set your desired position here
  },
};

if (externalConfig) {
  // Merge the imported config with the default nextConfig
  const config = externalConfig.default || externalConfig;

  for (const key in config) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      };
    } else {
      nextConfig[key] = config[key];
    }
  }
}

export default nextConfig;
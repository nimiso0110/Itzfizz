const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: base,
  assetPrefix: base || undefined,
};

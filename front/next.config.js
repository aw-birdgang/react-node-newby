const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  images: {
    // eslint-disable-next-line max-len
    // domains: ['react-nodebird.images.ap-northeast-2.amazonaws.com', 'react-nodebird-images.s3.amazonaws.com'],
    domains: ['react-node-newby-s3-northeast.images.ap-northeast-2.amazonaws.com', 'react-node-newby-s3-northeast-images.s3.amazonaws.com'], //
  },
  compress: true,
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === 'production';
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'inline-source-map',
      plugins: [
        ...config.plugins,
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
      ],
    };
  },
});

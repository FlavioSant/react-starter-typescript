const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    [
      '@babel/preset-env',
      {
        targets: { browsers: 'last 2 versions, not dead, > 0.25%' },
      },
    ],
    ['@babel/preset-typescript', { onlyRemoveTypeImports: true }],
  ],
  plugins: [isDevelopment && 'react-refresh/babel'].filter(Boolean),
};

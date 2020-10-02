module.exports = {
  plugins: ['react-hot-loader/babel', '@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime', '@babel/plugin-transform-modules-commonjs'],
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false, // enable to see loaded polyfills
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
  ],
};

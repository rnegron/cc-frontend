module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-notes'
  ],
  webpackFinal: async (config) => {
    (config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [require.resolve('babel-preset-react-app')],
            },
          },
        ],
      },
    ]),
      config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};

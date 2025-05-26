/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'react-native-worklets/plugin',
      {
        // Uncomment the next line to enable experimental bundling.
        experimentalBundling: true,
        workletizableModules: ['three'],
      },
    ],
  ],
};

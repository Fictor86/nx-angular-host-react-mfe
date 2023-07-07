module.exports = {
  name: 'microfront-react',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './src/remote-entry.ts',
  }
};

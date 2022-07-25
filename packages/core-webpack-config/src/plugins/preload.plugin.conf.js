const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

module.exports = [
  // preload initial js
  new PreloadWebpackPlugin({
    rel: 'preload',
    fileBlacklist: [/\.map/, /\.css/, /styles\..+/],
    include: 'initial', // 'initial' or 'allChunks'
    excludeHtmlNames: ['browserconfig.xml', 'manifest.json'],
  }),
];

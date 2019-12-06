const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/js/index.js'),
  templatePath: path.resolve(__dirname, '../', 'src/index.html'),
  imagesFolder: 'img',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};

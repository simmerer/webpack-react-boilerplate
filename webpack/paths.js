const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  templatePath: path.resolve(__dirname, '../', 'src/template.html'),
  entryPath: path.resolve(__dirname, '../', 'src/index.js'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};

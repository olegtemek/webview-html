const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

// Импортируйте CSS и JS как строки
const yourCSS = fs.readFileSync('./src/css/main.css', 'utf8');
const yourJS = fs.readFileSync('./src/scripts/script.js', 'utf8');

// Динамически находим все HTML-файлы
const htmlFiles = glob.sync('./src/**/*.html');

module.exports = {
  // Ваша остальная конфигурация Webpack...

  plugins: htmlFiles.map(filePath => new HtmlWebpackPlugin({
    filename: path.basename(filePath),
    templateContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${yourCSS}</style>
        </head>
        <body>
          ${fs.readFileSync(filePath, 'utf8')}
          <script>${yourJS}</script>
        </body>
      </html>
    `,
    inject: false,
  }))
};

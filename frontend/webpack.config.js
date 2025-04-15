const path = require('path');

module.exports = {
  entry: './index.js', // Archivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'public'), // Cambiado a 'public'
    filename: 'bundle.js', // Nombre del archivo generado
  },
  mode: 'production', // Modo de construcción
  module: {
    rules: [
      {
        test: /\.css$/, // Manejo de archivos CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/, // Manejo de archivos JS/JSX
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};

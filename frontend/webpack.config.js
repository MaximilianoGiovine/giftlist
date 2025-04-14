const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config(); // Carga las variables de entorno desde un archivo .env

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
        }),
    ],
};

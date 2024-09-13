const path = require('path');

module.exports = {
  entry: './src/cart.js',  
  output: {
    path: path.resolve(__dirname, 'public'), 
    filename: 'cart.js' 
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-env'] 
          }
        }
      }
    ]
  },
  mode: 'development' 
};

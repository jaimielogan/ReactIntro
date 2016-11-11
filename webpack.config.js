module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    filename: "bundle.js",
    path: "./"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

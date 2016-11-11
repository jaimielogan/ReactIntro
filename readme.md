React set up

1. npm init -y
2. npm install --save react react-dom babel-preset-react babel-preset-es2015 babel-loader babel-core
3. mkdir src
4. touch src/index.jsx
5. touch webpack.config.js
  1.
  ```javascript
  module.exports = {
      entry: [‘./src/index.jsx’],
      output: {
        filename: "bundle.js",
        path: "./"
      },
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
    ```
6. npm install --save webpack
7. git init
8. echo node_modules > .gitignore
9. In package.json, add the "build" piece
  1.
  ```javascript
  "scripts": {
    "build": "webpack --config“,
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```
10. touch index.html
11. npm run build

const path = require('path');
const tsTransformPaths = require('@zerollup/ts-transform-paths');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: '@rc/util',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options:  {
          getCustomTransformers: (program) => {
            const transformer = tsTransformPaths(program);

            return {
              before: [transformer.before], // for updating paths in generated code
              afterDeclarations: [transformer.afterDeclarations] // for updating paths in declaration files
            };
          },
        },
      },
    ],
  },
  externals: {
    'classnames': 'classnames',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      src: path.join(__dirname, 'src'),
    },
  },
};

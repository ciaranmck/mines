var config = {
  entry: __dirname + '/public/sketch.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  devtool: 'source-map'
};

module.exports = config;

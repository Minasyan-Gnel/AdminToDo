module.exports = {
  module: {
    rules: [
      {
        test: /\.(gif|png|jpeg|ttf|otf|eot|svg|woff|woff2?)(\?[a-z0-9]+)?$/,
        use: ['url-loader'],
      },
    ],
  },
};

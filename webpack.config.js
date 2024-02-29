const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // outras configurações do webpack...
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        // opções específicas para evitar o erro
      }
    })],
  },
};

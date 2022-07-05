module.exports = {
  devServer: {
    open: true,

    port: 9090,

    proxy: {
      '/api': {
        target: 'http://172.17.168.60:8000/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}

module.exports = {
  devServer: {
    proxy: {
      'api': {
        target: '192.168.50.139:8080/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
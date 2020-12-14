module.exports = {
  configureWebpack: {
    resolve: {
      alias: {//配置别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8080',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '/api': ''
  //       }
  //     }
  //   }
  // }
}

const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  // 配置方式一
  // resolve:{
  //   alias:{
  //     '@':path.resolve(__dirname,'src'),
  //     'components':'@/components'
  //   }
  // }

  // 配置方式二
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }

  // 配置方式三
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
    config.devServer.set('open', true)
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:4000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
})

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = 8000
const env = process.env.NODE_ENV

module.exports = {
  publicPath: env === 'development' ? '/' : './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: env === 'development',
  productionSourceMap: false,

  devServer: {
    port: port,
    open: true
  },
  css: {
    loaderOptions: {
      // 配置全局scss 颜色变量
      scss: {
        // 老的 sass-loader 是 data：
        prependData: `
          @import "@/styles/color.scss";
        `
      }
    }
  },
  configureWebpack: config => {

  },
  chainWebpack(config) {
    config.resolve.alias
      .set('@', resolve('src'))
    config
      .when(env !== 'development',
        config => config.devtool('source-map')
      )
  }
}

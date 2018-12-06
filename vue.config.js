const path = require('path')
const resolve =dir=>path.join(__dirname,dir)

const BASE_URL = process.env.NODE_ENV === 'production'?'/prod':'/'

module.exports={
  lintOnSave:false,
  baseUrl:BASE_URL,
  chainWebpack:config=>{
    config.resolve.
      alias.set('@',resolve('src')) // 配置目录别名
      .set('_c',resolve('components')) //组件目录别名
  },
  //打包时 不生成.map文件
  productionSourceMap:false,
  //开发环境代理
  devServer:{
    proxy:'http://localhost:5000/'
  }
}
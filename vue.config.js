const path = require('path')
const resolve =dir=>path.join(__dirname,dir)

const BASE_URL = process.env.NODE_ENV === 'production'?'/prod':'/'

module.exports={
  lintOnSave:false,
  baseUrl:BASE_URL,
  chainWebpack:config=>{
    config.resolve.
      alias.set('@',resolve('src')) // 配置目录别名
      .set('_c',resolve('src/components')) //组件目录别名
      .set( 'vue$', 'vue/dist/vue.esm.js') //修改vue 被导入时候的 路径 解决 you are using runtime-only vue报错 的问题
  },
  //打包时 不生成.map文件
  productionSourceMap:false,
  //开发环境代理
  devServer:{
    proxy:'http://localhost:5000/',
    port:8899
    // open:false
  }
}
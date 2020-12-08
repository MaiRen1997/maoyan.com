const path = require("path");
module.exports = {
  //关闭代码格式化
  // lintOnSave:false,
  //通过服务器代理，跨域访问资源
  // devServer: {
  // proxy: {
  //   '/ajax': {
  //     target: 'https://m.maoyan.com',
  //     ws: true,
  //     changeOrigin: true
  //   }
  // }
  // },

  //配置路径省略文件
  /* config => {
  config.resolve.alias.set("com", path.join(__dirname, "./src/components")); */
  chainWebpack: config => {
    config.resolve.alias.set("com", path.join(__dirname, "./src/components"));
  }
};

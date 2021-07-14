/*
 * @Author: chiLi
 * @Date: 2021-03-25 13:56:26
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
// 服务器代理配置
module.exports = {
    // 打包路径
    publicPath:'./',
     
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    },
}


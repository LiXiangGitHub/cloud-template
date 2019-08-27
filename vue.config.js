module.exports = {
    chainWebpack: config => {
        config.devServer.set('inline', false)
        config.devServer.set('hot', false)
        config.externals(['vue', 'vue-router'])
    },
    filenameHashing: false,
    // 打包输入文件名称
    outputDir: process.env.VUE_APP_NAME,
    productionSourceMap: false
}

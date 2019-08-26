module.exports = {
    chainWebpack: config => {
        config.externals(['vue', 'vue-router'])
    },
    filenameHashing: false,
    // 打包输入文件名称
    outputDir: process.env.VUE_APP_NAME,
}

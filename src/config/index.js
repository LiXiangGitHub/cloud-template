export default {
    baseUrl: {
        dev: 'http://localhost/' + process.env.VUE_APP_NAME,
        test: 'http://192.168.1.236:8088/' + process.env.VUE_APP_NAME,
        pro: 'http://10.0.0.56:8088/' + process.env.VUE_APP_NAME
    },
}
